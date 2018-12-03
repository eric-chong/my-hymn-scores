export default class Curve {
  constructor(startId, endId) {
    this._startId = startId;
    this._endId = endId;
  }

  getStartId() {
    return this._startId;
  }

  getEndId() {
    return this._endId;
  }
}
