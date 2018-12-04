import Note from "./note.model";

export default class TripletNote {
  constructor(notes) {
    if (notes.length !== 3) throw "triplet needs 3 notes";
    if (notes.some(note => !note instanceof Note))
      throw "should consist of only Note";

    this._notes = notes;
  }

  getNotes() {
    return this._notes;
  }

  getValue() {
    const valueMap = {
      "32": "16",
      "16": "8",
      "8": "q",
      q: "h",
      h: "w"
    };
    return valueMap[this._notes[0].getValue()];
  }
}
