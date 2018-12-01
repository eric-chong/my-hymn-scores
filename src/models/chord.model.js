export default class Chord {
  constructor(chordName, duration) {
    this._chordName = chordName;
    this._duration = duration;
  }

  getChordName() {
    return this._chordName;
  }

  getDuration() {
    return this._duration;
  }
}
