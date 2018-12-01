import React from "react";
import PropTypes from "prop-types";

import Measure from "../models/measure.model";
import SingleVoiceScore from "../models/singleVoiceScore.model";

import VF from "vexflow";
import Note from "../models/note.model";
import BeamNote from "../models/beamNote.model";
import Chord from "../models/chord.model";
import Lyric from "../models/lyric.model";
import VfGenerator from "../services/vfGenerator.service";
import TripletNote from "../models/tripletNote";

const FONT = {
  family: "Arial",
  size: 14,
  weight: ""
};

const StaveNote = VF.Flow.StaveNote;
const Stave = VF.Flow.Stave;
const Voice = VF.Flow.Voice;
const vfFactory = VF.Flow.Factory;
const VfFormatter = VF.Flow.Formatter;
const VfRegistry = VF.Flow.Registry;
const VfRenderer = VF.Flow.Renderer;

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 60;
    this.mainContainer = React.createRef();
  }

  static propTypes = {
    title: PropTypes.string
  };

  componentDidMount(nextProps) {
    window.beams = [];
    console.log("componentDidMount");
    drawMusicScore.bind(this)("music-score");
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div id="music-score" ref={this.mainContainer} />
      </div>
    );
  }
}

function drawMusicScore(elementId) {
  let registry = new VfRegistry();
  const singleVoiceScore = new SingleVoiceScore("A", "4/4", "80/q./Allegretto");
  console.log(singleVoiceScore);
  this.vf = new vfFactory({
    renderer: { elementId: elementId, width: 900, height: 1200 }
  });
  const score = this.vf.EasyScore();
  console.log(this.vf);

  let voice = score.voice.bind(score);
  let notes = score.notes.bind(score);
  let beam = score.beam.bind(score);
  console.log("score", score);
  console.log("beam", beam);

  // score.set({ time: "4/4" });

  const vfGenerator = new VfGenerator(
    this.vf,
    singleVoiceScore.getTimeSignature(),
    900,
    1200
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "3", "8"))
      .addNote(new Note("B", "3", "8"))
      .addChord(new Chord("", "q"))
      .addLyric(new Lyric("我", "8"))
      .addLyric(new Lyric("唱", "8"))
      .setMeasureBar("thinDouble")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("C", "4", "h."))
      .addNote(new Note("B", "3", "8"))
      .addNote(new Note("C", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("出，", "hd"))
      .addLyric(new Lyric("神", "8"))
      .addLyric(new Lyric("大", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("E", "4", "h."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("愛，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("神", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "4", "q"))
      .addNote(new Note("F", "4", "q"))
      .addNote(new Note("A", "3", "8"))
      .addNote(new Note("A", "3", "q"))
      .addNote(new Note("E", "4", "8"))
      .addChord(new Chord("F#m", "w"))
      .addLyric(new Lyric("豈", "q"))
      .addLyric(new Lyric("有", "q"))
      .addLyric(new Lyric("難", "8"))
      .addLyric(new Lyric("成", "q"))
      .addLyric(new Lyric("的", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("C", "4", "h."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("事，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("人", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "4", "8"))
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("F", "4", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("A", "3", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("生", "8"))
      .addLyric(new Lyric("路，", "hd"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("E", "4", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("D", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("起", "8"))
      .addLyric(new Lyric("跌，", "hd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("C", "4", "8"))
      .addNote(new Note("D", "4", "q"))
      .addNote(new Note("D", "4", "16"))
      .addNote(new Note("D", "4", "16"))
      .addNote(new Note("D", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("C", "4", "8"))
      .addChord(new Chord("Bm", "w"))
      .addLyric(new Lyric("話", "8"))
      .addLyric(new Lyric("語，", "q"))
      .addLyric(new Lyric("叫", "16"))
      .addLyric(new Lyric("我", "16"))
      .addLyric(new Lyric("永", "8"))
      .addLyric(new Lyric("不", "8"))
      .addLyric(new Lyric("動", "8"))
      .addLyric(new Lyric("", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("B", "3", "h."))
      .addNote(new Note("A", "3", "8"))
      .addNote(new Note("B", "3", "8"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("搖。", "hd"))
      .addLyric(new Lyric("在", "8"))
      .addLyric(new Lyric("世", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("C", "4", "h."))
      .addNote(new Note("B", "3", "8"))
      .addNote(new Note("C", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("間，", "hd"))
      .addLyric(new Lyric("能", "8"))
      .addLyric(new Lyric("遇", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("E", "4", "h."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("祢，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("迷", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "4", "q"))
      .addNote(new Note("F", "4", "q"))
      .addNote(new Note("E", "4", "q."))
      .addNote(new Note("F", "4", "8"))
      .addChord(new Chord("F#m", "w"))
      .addLyric(new Lyric("了", "q"))
      .addLyric(new Lyric("路", "q"))
      .addLyric(new Lyric("有", "qd"))
      .addLyric(new Lyric("主", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("C", "4", "8"))
      .addNote(new Note("C", "4", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("引", "8"))
      .addLyric(new Lyric("導。", "h"))
      .addLyric(new Lyric("", "q"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "4", "8"))
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("F", "4", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("A", "3", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("施", "8"))
      .addLyric(new Lyric("恩，", "hd"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("E", "4", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("D", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("看", "8"))
      .addLyric(new Lyric("顧，", "hd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("C", "4", "q."))
      .addNote(new Note("B", "3", "8"))
      .addNote(new Note("B", "3", "q."))
      .addNote(new Note("F", "4", "8"))
      .addChord(new Chord("Bm", "w"))
      .addLyric(new Lyric("杖", "qd"))
      .addLyric(new Lyric("扶", "8"))
      .addLyric(new Lyric("持，", "qd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("G", "4", "q."))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("E", "4", "h"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("竿", "qd"))
      .addLyric(new Lyric("引", "8"))
      .addLyric(new Lyric("領，", "h"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("E", "4", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("A", "4", "8"))
      .addChord(new Chord("D/E", "h"))
      .addChord(new Chord("E", "h"))
      .addLyric(new Lyric("", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("何", "8"))
      .addLyric(new Lyric("時", "8"))
      .addLyric(new Lyric("我", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("B", "4", "8"))
      .addNote(new Note("C", "5", "q."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("A", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("跌", "8"))
      .addLyric(new Lyric("倒", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("何", "8"))
      .addLyric(new Lyric("時", "8"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("G", "4", "8"))
      .addNote(new Note("F", "5", "q."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("G", "4", "8"))
      .addNote(new Note("A", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("扶", "8"))
      .addLyric(new Lyric("持，", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("危", "8"))
      .addLyric(new Lyric("難", "8"))
      .addLyric(new Lyric("遇", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("E", "5", "8"))
      .addNote(new Note("D", "5", "8"))
      .addNote(new Note("D", "5", "h"))
      .addNote(new Note("A", "4", "8"))
      .addNote(new Note("B", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("風", "8"))
      .addLyric(new Lyric("雪，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("祢", "8"))
      .addLyric(new Lyric("必", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "4", "8"))
      .addNote(new Note("G", "4", "q."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("E", "4", "8"))
      .addNote(new Note("A", "4", "8"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("庇", "8"))
      .addLyric(new Lyric("佑。", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("前", "8"))
      .addLyric(new Lyric("途", "8"))
      .addLyric(new Lyric("在", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("B", "4", "8"))
      .addNote(new Note("C", "5", "q."))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("E", "5", "8"))
      .addNote(new Note("A", "4", "8"))
      .addNote(new Note("A", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("祢", "8"))
      .addLyric(new Lyric("手，", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("牽", "8"))
      .addLyric(new Lyric("我", "8"))
      .addLyric(new Lyric("到", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("G", "4", "8"))
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("F", "4", "h"))
      .addNote(new Note("E", "5", "8"))
      .addNote(new Note("C", "5", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("白", "8"))
      .addLyric(new Lyric("頭，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("守", "8"))
      .addLyric(new Lyric("護", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("D", "5", "h"))
      .addNote(new Note("r", "4", "8"))
      .addNote(new Note("F", "4", "8"))
      .addNote(new Note("C", "5", "8"))
      .addNote(new Note("D", "5", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("我，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("從", "8"))
      .addLyric(new Lyric("今", "8"))
      .addLyric(new Lyric("天", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("B", "4", "h"))
      .addNote(
        new TripletNote([
          new Note("G", "4", "q"),
          new Note("A", "4", "q"),
          new Note("A", "4", "q")
        ])
      )
      // .addNote(new Note("r", "4", "8"))
      // .addNote(new Note("G", "4", "8"))
      // .addNote(new Note("A", "4", "8"))
      // .addNote(new Note("A", "4", "8"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("起，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("直", "8"))
      .addLyric(new Lyric("到", "8"))
      .addLyric(new Lyric("永", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("A", "4", "h."))
      .addChord(new Chord("A", "hd"))
      .addLyric(new Lyric("遠。", "hd"))
      .setMeasureBar("singleRight")
  );
  vfGenerator.generateSystems(singleVoiceScore);

  // /*  Measure 1 */
  // // vfGenerator.generatorMeasureNotes(measure);
  // // console.log(vfGenerator.generateMeasureLyrics(measure));
  // let system = makeSystem.bind(this)(20 + 60 + 20 + 30 + 30); // 160
  // system
  //   .addStave({
  //     voices: [
  //       // voice([beam(notes("A3/8, B3/8"), { stem: "up" })].reduce(concat), {
  //       //   time: "1/4"
  //       // }),
  //       vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(0)),
  //       vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(0))
  //       // voice(
  //       //   [
  //       //     this.vf
  //       //       .TextNote({ text: "我", duration: "8", font: FONT })
  //       //       .setLine(12),
  //       //     this.vf
  //       //       .TextNote({ text: "唱", duration: "8", font: FONT })
  //       //       .setLine(12)
  //       //   ],
  //       //   {
  //       //     time: "1/4"
  //       //   }
  //       // )
  //     ]
  //   }) // 30 + 30
  //   .addClef("treble") // 20
  //   .addKeySignature(singleVoiceScore.getKey()) // 60
  //   .addTimeSignature(singleVoiceScore.getTimeSignature().toString()) // 20
  //   .setTempo(singleVoiceScore.getTempo(), -30);
  // // .addKeySignature("A") // 60
  // // .addTimeSignature("4/4") // 20
  // // .setTempo({ name: "Allegretto", duration: "h", dots: 1, bpm: 66 }, -30);
  // // system.addConnector("singleLeft");
  // system.addConnector(singleVoiceScore.getMeasure(0).getMeasureBar());

  // /*  Measure 2 */
  // system = makeSystem.bind(this)(100 + 30 + 30); // 160
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(1)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(1)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(1))

  //     // vfGenerator.generateMeasureNotes(measure2),
  //     // voice(
  //     //   [notes("C4/h."), beam(notes("B3/8, C4", { stem: "up" }))].reduce(
  //     //     concat
  //     //   ),
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // ), // 100 + 30 + 30
  //     // vfGenerator.generateMeasureChords(measure2),
  //     // voice(
  //     //   [this.vf.TextNote({ text: "A", duration: "w", font: FONT }).setLine(1)],
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // ),
  //     // vfGenerator.generateMeasureLyrics(measure2)
  //     // voice(
  //     //   [
  //     //     this.vf
  //     //       .TextNote({ text: "出，", duration: "hd", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf
  //     //       .TextNote({ text: "神", duration: "8", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf
  //     //       .TextNote({ text: "大", duration: "8", font: FONT })
  //     //       .setLine(12)
  //     //   ],
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // )
  //     // voice([
  //     //   this.vf.TextDynamics({ text: "p", duration: "h", dots: 1, line: 9 })
  //     // ])
  //   ]
  // });
  // system.addConnector(singleVoiceScore.getMeasure(1).getMeasureBar());

  // /*  Measure 3 */
  // system = makeSystem.bind(this)(100 + 30 + 30); // 160
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(2)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(2)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(2))

  //     // vfGenerator.generateMeasureNotes(measure3),
  //     // voice(notes("E4/h., B4/8/r, A3"), {
  //     //   time: "4/4"
  //     // }), // 100 + 30 + 30
  //     // vfGenerator.generateMeasureChords(measure3),
  //     // voice(
  //     //   [
  //     //     this.vf
  //     //       .TextNote({ text: "C#m", duration: "w", font: FONT })
  //     //       .setLine(1)
  //     //   ],
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // ),
  //     // vfGenerator.generateMeasureLyrics(measure3)
  //     // voice(
  //     //   [
  //     //     this.vf
  //     //       .TextNote({ text: "愛，", duration: "hd", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf.TextNote({ text: "", duration: "8", font: FONT }).setLine(11),
  //     //     this.vf
  //     //       .TextNote({ text: "神", duration: "8", font: FONT })
  //     //       .setLine(12)
  //     //   ],
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // )
  //   ]
  // });
  // // system.addStave({ voices: [voice(notes("B3/h.", { clef: "bass" }))] });
  // system.addConnector(singleVoiceScore.getMeasure(2).getMeasureBar());

  // // id('m2a').addModifier(0, vf.Articulation({ type: 'a.', position: 'above' }));
  // // id('m2b').addModifier(0, vf.Articulation({ type: 'a.', position: 'below' }));
  // // id('m2c').addModifier(0, vf.Articulation({ type: 'a.', position: 'below' }));

  // // vf.Curve({
  // //   from: id('m1a'),
  // //   to: id('m2a'),
  // //   options: { cps: [{ x: 0, y: 40 }, { x: 0, y: 40 }] },
  // // });

  // /*  Measure 4 */
  // system = makeSystem.bind(this)(45 + 45 + 30 + 45 + 30); // 195
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(3)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(3)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(3))
  //     // voice([notes("A4/q, F4, A3/8, A3/q, E4/8")].reduce(concat), {
  //     //   time: "4/4"
  //     // }),
  //     // voice(
  //     //   [
  //     //     this.vf
  //     //       .TextNote({ text: "豈", duration: "q", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf
  //     //       .TextNote({ text: "有", duration: "q", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf
  //     //       .TextNote({ text: "難", duration: "8", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf
  //     //       .TextNote({ text: "成", duration: "q", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf
  //     //       .TextNote({ text: "的", duration: "8", font: FONT })
  //     //       .setLine(12)
  //     //   ],
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // )
  //   ] // 45 + 45 + 30 + 45 + 30
  // });
  // // id('m3a').addModifier(0, vf.Fingering({ number: '3', position: 'above' }));

  // // system.addStave({ voices: [voice(notes('C4/h.', { clef: 'bass' }))] });
  // // system.addConnector("singleRight");
  // system.addConnector(singleVoiceScore.getMeasure(3).getMeasureBar());

  // /* Measure 5 */
  // system = makeSystem.bind(this)(100 + 30 + 30); // 160
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(4)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(4)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(4))

  //     // voice(notes("C4/h., B4/8/r, A3"), {
  //     //   time: "4/4"
  //     // }),
  //     // voice(
  //     //   [
  //     //     this.vf
  //     //       .TextNote({ text: "事，", duration: "hd", font: FONT })
  //     //       .setLine(12),
  //     //     this.vf.TextNote({ text: "", duration: "8", font: FONT }).setLine(11),
  //     //     this.vf
  //     //       .TextNote({ text: "人", duration: "8", font: FONT })
  //     //       .setLine(12)
  //     //   ],
  //     //   {
  //     //     time: "4/4"
  //     //   }
  //     // )
  //   ] // 100 + 30 + 30
  // });
  // // system.addStave({ voices: [voice(notes("B3/h.", { clef: "bass" }))] });
  // system.addConnector(singleVoiceScore.getMeasure(4).getMeasureBar());
  // // id('m3a').addModifier(0, vf.Fingering({ number: '3', position: 'above' }));

  // // system.addStave({ voices: [voice(notes('C4/h.', { clef: 'bass' }))] });

  // /* Measure 6 */
  // system = makeSystem.bind(this)(30 + 30 + 60 + 30 + 30); // 160
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(5)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(5)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(5))
  //   ] // 30 + 30 + 60 + 30 + 30
  // });
  // system.addConnector(singleVoiceScore.getMeasure(5).getMeasureBar());

  // new system
  // this.x = 0;
  // this.y += 170;
  // /*  Measure 7 */
  // let system = makeSystem.bind(this)(20 + 60 + 20 + 30 + 30 + 60 + 30 + 30);
  // system
  //   .addStave({
  //     voices: [
  //       vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(6)),
  //       vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(6)),
  //       vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(6))

  //       // voice([beam(notes("A3/8, B3"), { stem: "up" })].reduce(concat), {
  //       //   time: "1/4"
  //       // }),
  //       // voice(
  //       //   [
  //       //     this.vf
  //       //       .TextNote({ text: "我", duration: "8", font: FONT })
  //       //       .setLine(12),
  //       //     this.vf
  //       //       .TextNote({ text: "唱", duration: "8", font: FONT })
  //       //       .setLine(12)
  //       //   ],
  //       //   {
  //       //     time: "1/4"
  //       //   }
  //       // )
  //     ]
  //   }) // 30 + 30
  //   .addClef("treble") // 20
  //   .addKeySignature(singleVoiceScore.getKey()) // 60
  //   .addTimeSignature(singleVoiceScore.getTimeSignature().toString()); // 20
  // system.addConnector(singleVoiceScore.getMeasure(6).getMeasureBar());

  // system = makeSystem.bind(this)(singleVoiceScore.getMeasure(7).getWidth());
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(7)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(7)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(7))
  //   ]
  // });
  // system.addConnector(singleVoiceScore.getMeasure(7).getMeasureBar());

  // system = makeSystem.bind(this)(singleVoiceScore.getMeasure(8).getWidth());
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(8)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(8)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(8))
  //   ]
  // });
  // system.addConnector(singleVoiceScore.getMeasure(8).getMeasureBar());

  // system = makeSystem.bind(this)(singleVoiceScore.getMeasure(9).getWidth());
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(9)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(9)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(9))
  //   ]
  // });
  // system.addConnector(singleVoiceScore.getMeasure(9).getMeasureBar());

  // system = makeSystem.bind(this)(singleVoiceScore.getMeasure(10).getWidth());
  // system.addStave({
  //   voices: [
  //     vfGenerator.generateMeasureNotes(singleVoiceScore.getMeasure(10)),
  //     vfGenerator.generateMeasureLyrics(singleVoiceScore.getMeasure(10)),
  //     vfGenerator.generateMeasureChords(singleVoiceScore.getMeasure(10))
  //   ]
  // });
  // system.addConnector(singleVoiceScore.getMeasure(10).getMeasureBar());

  // drawing
  // console.log("system", system);
  // console.log("voices", system.voices);
  // console.log("this.vf", this.vf);
  // console.log("this.vf.StaveNote", this.vf.StaveNote);
  // console.log("this.vf.voices", this.vf.voices);
  // const vfContext = this.vf.getContext();
  // const StaveNote = this.vf.StaveNote;
  // let staveNotesVoice = this.vf.voices.filter(voice => {
  //   const tickables = voice.getTickables();
  //   console.log(tickables);
  //   return tickables.every(tickable => tickable.beam !== undefined);
  // });
  // console.log("staveNotesVoice", staveNotesVoice);
  // staveNotesVoice.forEach(voice => {
  //   console.log("voice.getTickables()", voice.getTickables());
  //   let tickables = voice.getTickables();

  //   let beams = VF.Flow.Beam.generateBeams(voice.getTickables(), {
  //     beam_rests: false
  //   });
  //   console.log("beams", beams);
  //   console.log(vfContext);
  //   beams.forEach(beam => {
  //     return beam.setContext(vfContext).draw();
  //   });
  // });
  vfGenerator.draw();
  // const vfContext = this.vf.getContext();
  // window.beams.forEach(function(beam) {
  //   return beam.setContext(vfContext).draw();
  // });
  VfRegistry.disableDefaultRegistry();

  function id(id) {
    return registry.getElementById(id);
  }
}

function makeSystem(width) {
  let system = this.vf.System({
    x: this.x,
    y: this.y,
    width: width,
    spaceBetweenStaves: 10
  });
  this.x += width;
  return system;
}

function concat(a, b) {
  return a.concat(b);
}
