import Score from "./score.model";
import Measure from "./measure.model";

export default class SingleVoiceScore extends Score {
  constructor(key, time, tempo) {
    super(key, time, tempo);

    this._measures = [];
  }

  addMeasure(measure) {
    if (!measure instanceof Measure) throw "cannot add measure";
    this._measures.push(measure);
  }

  getMeasure(measureIndex) {
    return this._measures[measureIndex];
  }

  getSystems(systemWidth) {
    let systems = [];
    let currSystemWidth = 0;
    let currSystem = [];

    this._measures.forEach(measure => {
      let measureWidth = measure.getWidth();
      if (currSystemWidth + measureWidth <= systemWidth) {
        currSystemWidth += measureWidth;
      } else {
        systems.push(currSystem);
        currSystem = [];
        currSystemWidth = 0;
      }
      currSystem.push(measure);
    });
    systems.push(currSystem);

    return systems;
  }
}
