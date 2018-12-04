import flatten from "lodash/flatten";
import BeamNotes from "../models/beamNote.model";
import TripletNote from "../models/tripletNote";
import VF from "vexflow";

import isEqual from "lodash/isEqual";
import TripletLyric from "../models/tripletLyric";

const noteValueMap = {
  w: 1,
  h: 1 / 2,
  "2": 1 / 2,
  "h.": 3 / 4,
  hd: 3 / 4,
  q: 1 / 4,
  "q.": 3 / 8,
  qd: 3 / 8,
  "4": 1 / 4,
  "8": 1 / 8,
  "8.": 3 / 16,
  "8d": 3 / 16,
  "16": 1 / 16,
  "16.": 3 / 32,
  "16d": 3 / 32
};

const FONT = {
  family: "Arial",
  size: 14,
  weight: ""
};

const vfFactory = VF.Flow.Factory;
const vfRegistry = VF.Flow.Registry;

export default class VfGenerator {
  constructor(elementId, timeSignature, width, height) {
    this._x = 0;
    this._y = 60;

    this._registry = new vfRegistry();
    vfRegistry.enableDefaultRegistry(this._registry);
    this._vf = new vfFactory({
      renderer: { elementId, width, height }
    });

    this._score = this._vf.EasyScore();
    console.log(this._vf);
    console.log(this._score);

    this._voice = this._score.voice.bind(this._score);
    this._notes = this._score.notes.bind(this._score);
    this._tuplet = this._score.tuplet.bind(this._score);
    this._beam = this._score.beam.bind(this._score);

    this._timeSignature = timeSignature;
    this._width = width;
    this._height = height;
    this._autoBeams = [];
  }

  generateSystems(singleVoiceScore) {
    let systems = singleVoiceScore.getSystems(this._width - 100);
    let vfSystem;

    systems.forEach((system, systemIndex) => {
      let spareSystemWidthPerMeasure =
        (this._width -
          101 -
          system.reduce((totalWidth, currMeasure) => {
            return totalWidth + currMeasure.getWidth();
          }, 0)) /
        system.length;
      const isLastSystem = systemIndex === systems.length - 1;

      system.forEach((measure, index) => {
        let measureWidth = measure.getWidth();
        const isFirstMeasure = index === 0;
        const isLastMeasure = index === system.length - 1;
        if (isFirstMeasure) measureWidth += 100;
        measureWidth += spareSystemWidthPerMeasure;
        vfSystem = makeSystem.bind(this)(measureWidth);
        let vfStave = vfSystem.addStave({
          voices: [
            this.generateMeasureNotes(measure),
            this.generateMeasureLyrics(measure),
            this.generateMeasureChords(measure)
          ]
        });
        if (isFirstMeasure) {
          vfStave
            .addClef("treble") // 20
            .addKeySignature(singleVoiceScore.getKey()) // 60
            .addTimeSignature(singleVoiceScore.getTimeSignature().toString()); // 20
        }
        vfSystem.addConnector(measure.getMeasureBar());
      });

      this._x = 0;
      this._y += 170;
    });

    this._generateCurves(singleVoiceScore);
  }

  generateMeasureNotes(measure) {
    const notes = measure.getNotes();
    const voice = this._voice(
      notes
        .map(note => {
          if (note instanceof BeamNotes) {
            const beamNotes = note.getNotes();
            return this._generateVfNotes(beamNotes);
          } else if (note instanceof TripletNote) {
            const tripletNote = note;
            return this._generateTripletVfNote(tripletNote);
          } else {
            return this._generateVfNotes([note]);
          }
        })
        .reduce((resultNotes, currNote) => resultNotes.concat(currNote)),
      { time: this._calculateMeasureBeats(notes) }
    );
    let beams = VF.Flow.Beam.generateBeams(voice.getTickables(), {
      beam_rests: false
    });
    this._autoBeams = this._autoBeams.concat(beams);

    return voice;
  }

  generateMeasureLyrics(measure) {
    const lyrics = measure.getLyrics();
    return this._voice(
      lyrics
        .map(lyric => {
          if (lyric instanceof TripletLyric) {
            const textNotes = lyric.getLyrics().map(lyricWord => {
              const textNode = this._vf
                .TextNote({
                  text: lyricWord.getLyricWord(),
                  duration: lyricWord.getDuration(),
                  font: FONT
                })
                .setLine(12);
              textNode.applyTickMultiplier(2, 3);
              return textNode;
            });
            console.log("textNotes", textNotes);
            // this._tuplet(textNotes);
            return textNotes;
          }
          return this._vf
            .TextNote({
              text: lyric.getLyricWord(),
              duration: lyric.getDuration(),
              font: FONT
            })
            .setLine(12);
        })
        .flat(),
      { time: this._calculateMeasureLyricBeats(lyrics) }
    );
  }

  generateMeasureChords(measure) {
    const chords = measure.getChords();
    return this._voice(
      chords.map(chord => {
        return this._vf
          .TextNote({
            text: chord.getChordName(),
            duration: chord.getDuration(),
            font: FONT
          })
          .setLine(1);
      }),
      { time: this._calculateMeasureChordBeats(chords) }
    );
  }

  draw() {
    this._vf.draw();
    this.drawBeams();
  }

  drawBeams() {
    const vfContext = this._vf.getContext();
    this._autoBeams.forEach(function(beam) {
      return beam.setContext(vfContext).draw();
    });
  }

  _generateVfNotes(notes) {
    const easyScoreNotes = notes.map(easyScoreNote).join(", ");
    return this._notes(easyScoreNotes);
  }

  _generateTripletVfNote(tripletNote) {
    const easyScoreNotes = tripletNote
      .getNotes()
      .map(easyScoreNote)
      .join(", ");
    return this._tuplet(this._notes(easyScoreNotes));
  }

  _generateCurves(singleVoiceScore) {
    const curves = singleVoiceScore.getCurves();
    curves.forEach(curve => {
      const from = this._getNoteById(curve.getStartId());
      const to = this._getNoteById(curve.getEndId());
      if (from && to) {
        if (!isEqual(from.ys, to.ys)) {
          this._vf.Curve({ from, to: null });
          this._vf.Curve({ from: null, to });
        } else {
          this._vf.Curve({ from, to });
        }
      }
    });
  }

  _calculateMeasureBeats(notes) {
    const measureNotesTotalValue = this._calculateMeasureNotesTotalValue(notes);
    const measureNoteValue = noteValueMap[this._timeSignature.getNoteValue()];

    return `${measureNotesTotalValue /
      measureNoteValue}/${this._timeSignature.getNoteValue()}`;
  }

  _calculateMeasureLyricBeats(lyrics) {
    const measureLyricsTotalValue = lyrics.reduce((totalValue, currLyric) => {
      return totalValue + noteValueMap[currLyric.getDuration()];
    }, 0);
    const measureNoteValue = noteValueMap[this._timeSignature.getNoteValue()];

    return `${measureLyricsTotalValue /
      measureNoteValue}/${this._timeSignature.getNoteValue()}`;
  }

  _calculateMeasureChordBeats(chords) {
    const measureChordsTotalValue = chords.reduce((totalValue, currChord) => {
      return totalValue + noteValueMap[currChord.getDuration()];
    }, 0);
    const measureNoteValue = noteValueMap[this._timeSignature.getNoteValue()];

    return `${measureChordsTotalValue /
      measureNoteValue}/${this._timeSignature.getNoteValue()}`;
  }

  _calculateMeasureNotesTotalValue(notes) {
    return flattenNotes(notes).reduce((totalValue, currNote) => {
      return totalValue + noteValueMap[currNote.getValue()];
    }, 0);
  }

  _getNoteById(id) {
    return this._registry.getElementById(id);
  }
}

function easyScoreNote(note) {
  if (note.getNote() === "r") {
    return `B4/${note.getValue()}/${note.getNote()}`;
  } else {
    return `${note.getNote()}${note.getOctave()}/${note.getValue()}[id="${note.getId()}"]`;
  }
}

function flattenNotes(notes) {
  return flatten(
    notes.map(note => {
      if (note instanceof BeamNotes) {
        return note.getNotes();
      } else {
        return note;
      }
    })
  );
}

function makeSystem(width) {
  let system = this._vf.System({
    x: this._x,
    y: this._y,
    width: width,
    spaceBetweenStaves: 10
  });
  this._x += width;
  return system;
}
