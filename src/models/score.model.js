import TimeSignature from "./timeSignature.model";

export default class Score {
  constructor(key, time, tempo) {
    console.log(key, time, tempo);
    this.setKey(key);
    this.setTimeSignature(time);
    this.setTempo(tempo);
  }

  getKey() {
    return this._key;
  }

  setKey(key) {
    this._key = key;
  }

  getTimeSignature() {
    return this._timeSignature;
  }

  setTimeSignature(time) {
    this._timeSignature = new TimeSignature(time);
    console.log(this._timeSignature);
  }

  getTempo() {
    return this._tempo;
  }

  setTempo(tempo) {
    if (!isTempoValid(tempo)) throw "Invalid tempo";
    this._tempo = getParsedTempo(tempo);
  }
}

function isTempoValid(tempo) {
  return tempo.match(/^\d*\/(w|h|q|8|16)\.?\/.*$/);
}

function getParsedTempo(tempo) {
  let [bpm, noteValueIncludeDot, name] = tempo.split("/");
  let [duration, noteDot] = noteValueIncludeDot.split(".");
  return { bpm, duration, dots: noteDot !== undefined ? 1 : 0, name };
}

function isNoteValueValid(noteValue) {
  return ["2", "4", "8", "16"].includes(noteValue);
}
