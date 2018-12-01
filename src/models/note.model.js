const VALID_NOTES = ["C", "D", "E", "F", "G", "A", "B", "r"];
const VALID_VALUES = [
  "16",
  "16.",
  "16d",
  "8",
  "8.",
  "8d",
  "q",
  "q.",
  "qd",
  "h",
  "h.",
  "hd",
  "w"
];

export default class Note {
  constructor(note, octave, value) {
    if (!VALID_NOTES.includes(note)) throw "invalid note";
    if (!VALID_VALUES.includes(value)) throw "invalid note value";

    this._note = note;
    this._octave = octave;
    this._value = value;
  }

  getNote() {
    return this._note;
  }

  getOctave() {
    return this._octave;
  }

  getValue() {
    return this._value;
  }
}
