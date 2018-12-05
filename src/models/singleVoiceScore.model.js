import Score from "./score.model";
import Measure from "./measure.model";
import Curve from "./curve.model";

export default class SingleVoiceScore extends Score {
  constructor(key, time, tempo) {
    super(key, time, tempo);

    this._measures = [];
    this._curves = [];
  }

  addMeasure(measure) {
    if (!measure instanceof Measure) throw "cannot add measure";
    this._measures.push(measure);
  }

  addCurve(curve) {
    if (!curve instanceof Curve) throw "cannot add curve";
    this._curves.push(curve);
  }

  getCurves() {
    return this._curves;
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
        currSystemWidth = measureWidth;
      }
      currSystem.push(measure);
    });
    systems.push(currSystem);

    return systems;
  }
}
