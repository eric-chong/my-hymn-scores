export default class BeamNotes {
  constructor(notes, direction) {
    this._notes = notes;
    this._direction = direction;
  }

  getNotes() {
    return this._notes;
  }

  getDirection() {
    return this._direction;
  }
}
