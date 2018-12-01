export default class TimeSignature {
  constructor(time) {
    if (!isTimeValid(time)) return;

    this._beats = time.split("/")[0];
    this._noteValue = time.split("/")[1];
  }

  getBeats() {
    return this._beats;
  }

  getNoteValue() {
    return this._noteValue;
  }

  toString() {
    return `${this._beats}/${this._noteValue}`;
  }
}

function isTimeValid(time) {
  return time.match(/^\d*\/(2|4|8|16)$/);
}
