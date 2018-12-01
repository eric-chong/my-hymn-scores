import MeasureWidthCalculator from "../services/measureWidthCalculator";

export default class Measure {
  constructor() {
    this._notes = [];
    this._lyrics = [];
    this._chords = [];
    this._measureBar = "singleLeft";
  }

  addNote(note) {
    this._notes.push(note);
    return this;
  }

  getNotes() {
    return this._notes;
  }

  addLyric(lyric) {
    this._lyrics.push(lyric);
    return this;
  }

  getLyrics() {
    return this._lyrics;
  }

  addChord(chord) {
    this._chords.push(chord);
    return this;
  }

  getChords() {
    return this._chords;
  }

  setMeasureBar(measureBar) {
    this._measureBar = measureBar;
    return this;
  }

  getMeasureBar() {
    return this._measureBar;
  }

  getWidth() {
    return MeasureWidthCalculator.calcWidth(this);
  }
}
