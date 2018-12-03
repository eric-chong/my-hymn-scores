import React from "react";
import PropTypes from "prop-types";

import Measure from "../models/measure.model";
import SingleVoiceScore from "../models/singleVoiceScore.model";

import VF from "vexflow";
import Note from "../models/note.model";
import Chord from "../models/chord.model";
import Lyric from "../models/lyric.model";
import VfGenerator from "../services/vfGenerator.service";
import TripletNote from "../models/tripletNote";
import Curve from "../models/curve.model";

const FONT = {
  family: "Arial",
  size: 14,
  weight: ""
};

const VfRegistry = VF.Flow.Registry;

export default class Score extends React.Component {
  constructor(props) {
    super(props);
    this.x = 0;
    this.y = 60;
    this.mainContainer = React.createRef();
  }

  static propTypes = {
    title: PropTypes.string
  };

  componentDidMount(nextProps) {
    window.beams = [];
    drawMusicScore.bind(this)("music-score");
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div id="music-score" ref={this.mainContainer} />
      </div>
    );
  }
}

function drawMusicScore(elementId) {
  const singleVoiceScore = new SingleVoiceScore("A", "4/4", "80/q./Allegretto");
  const vfGenerator = new VfGenerator(
    elementId,
    singleVoiceScore.getTimeSignature(),
    1200,
    1200
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m1n1", "A", "3", "8"))
      .addNote(new Note("m1n2", "B", "3", "8"))
      .addChord(new Chord("", "q"))
      .addLyric(new Lyric("我", "8"))
      .addLyric(new Lyric("唱", "8"))
      .setMeasureBar("thinDouble")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m2n1", "C", "4", "h."))
      .addNote(new Note("m2n2", "B", "3", "8"))
      .addNote(new Note("m2n3", "C", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("出，", "hd"))
      .addLyric(new Lyric("神", "8"))
      .addLyric(new Lyric("大", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m3n1", "E", "4", "h."))
      .addNote(new Note("m3n2", "r", "4", "8"))
      .addNote(new Note("m3n3", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("愛，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("神", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m4n1", "A", "4", "q"))
      .addNote(new Note("m4n2", "F", "4", "q"))
      .addNote(new Note("m4n3", "A", "3", "8"))
      .addNote(new Note("m4n4", "A", "3", "q"))
      .addNote(new Note("m4n5", "E", "4", "8"))
      .addChord(new Chord("F#m", "w"))
      .addLyric(new Lyric("豈", "q"))
      .addLyric(new Lyric("有", "q"))
      .addLyric(new Lyric("難", "8"))
      .addLyric(new Lyric("成", "q"))
      .addLyric(new Lyric("的", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m5n1", "C", "4", "h."))
      .addNote(new Note("m5n2", "r", "4", "8"))
      .addNote(new Note("m5n3", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("事，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("人", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m6n1", "A", "4", "8"))
      .addNote(new Note("m6n2", "F", "4", "8"))
      .addNote(new Note("m6n3", "F", "4", "h"))
      .addNote(new Note("m6n4", "r", "4", "8"))
      .addNote(new Note("m6n5", "A", "3", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("生", "8"))
      .addLyric(new Lyric("路，", "hd"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m7n1", "F", "4", "8"))
      .addNote(new Note("m7n2", "E", "4", "8"))
      .addNote(new Note("m7n3", "E", "4", "h"))
      .addNote(new Note("m7n4", "r", "4", "8"))
      .addNote(new Note("m7n5", "D", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("起", "8"))
      .addLyric(new Lyric("跌，", "hd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m8n1", "C", "4", "8"))
      .addNote(new Note("m8n2", "D", "4", "q"))
      .addNote(new Note("m8n3", "D", "4", "16"))
      .addNote(new Note("m8n4", "D", "4", "16"))
      .addNote(new Note("m8n5", "D", "4", "8"))
      .addNote(new Note("m8n6", "E", "4", "8"))
      .addNote(new Note("m8n7", "F", "4", "8"))
      .addNote(new Note("m8n8", "C", "4", "8"))
      .addChord(new Chord("Bm", "w"))
      .addLyric(new Lyric("話", "8"))
      .addLyric(new Lyric("語，", "q"))
      .addLyric(new Lyric("叫", "16"))
      .addLyric(new Lyric("我", "16"))
      .addLyric(new Lyric("永", "8"))
      .addLyric(new Lyric("不", "8"))
      .addLyric(new Lyric("動", "8"))
      .addLyric(new Lyric("", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m9n1", "B", "3", "h."))
      .addNote(new Note("m9n2", "A", "3", "8"))
      .addNote(new Note("m9n3", "B", "3", "8"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("搖。", "hd"))
      .addLyric(new Lyric("在", "8"))
      .addLyric(new Lyric("世", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m10n1", "C", "4", "h."))
      .addNote(new Note("m10n2", "B", "3", "8"))
      .addNote(new Note("m10n3", "C", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("間，", "hd"))
      .addLyric(new Lyric("能", "8"))
      .addLyric(new Lyric("遇", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m11n1", "E", "4", "h."))
      .addNote(new Note("m11n2", "r", "4", "8"))
      .addNote(new Note("m11n3", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("祢，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("迷", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m12n1", "A", "4", "q"))
      .addNote(new Note("m12n2", "F", "4", "q"))
      .addNote(new Note("m12n3", "E", "4", "q."))
      .addNote(new Note("m12n4", "F", "4", "8"))
      .addChord(new Chord("F#m", "w"))
      .addLyric(new Lyric("了", "q"))
      .addLyric(new Lyric("路", "q"))
      .addLyric(new Lyric("有", "qd"))
      .addLyric(new Lyric("主", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m13n1", "E", "4", "8"))
      .addNote(new Note("m13n2", "C", "4", "8"))
      .addNote(new Note("m13n3", "C", "4", "h"))
      .addNote(new Note("m13n4", "r", "4", "8"))
      .addNote(new Note("m13n5", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("引", "8"))
      .addLyric(new Lyric("導。", "h"))
      .addLyric(new Lyric("", "q"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m14n1", "A", "4", "8"))
      .addNote(new Note("m14n2", "F", "4", "8"))
      .addNote(new Note("m14n3", "F", "4", "h"))
      .addNote(new Note("m14n4", "r", "4", "8"))
      .addNote(new Note("m14n5", "A", "3", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("施", "8"))
      .addLyric(new Lyric("恩，", "hd"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m15n1", "F", "4", "8"))
      .addNote(new Note("m15n2", "E", "4", "8"))
      .addNote(new Note("m15n3", "E", "4", "h"))
      .addNote(new Note("m15n4", "r", "4", "8"))
      .addNote(new Note("m15n5", "D", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("看", "8"))
      .addLyric(new Lyric("顧，", "hd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m16n1", "C", "4", "q."))
      .addNote(new Note("m16n2", "B", "3", "8"))
      .addNote(new Note("m16n3", "B", "3", "q."))
      .addNote(new Note("m16n4", "F", "4", "8"))
      .addChord(new Chord("Bm", "w"))
      .addLyric(new Lyric("杖", "qd"))
      .addLyric(new Lyric("扶", "8"))
      .addLyric(new Lyric("持，", "qd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m17n1", "G", "4", "q."))
      .addNote(new Note("m17n2", "E", "4", "8"))
      .addNote(new Note("m17n3", "E", "4", "h"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("竿", "qd"))
      .addLyric(new Lyric("引", "8"))
      .addLyric(new Lyric("領，", "h"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m18n1", "E", "4", "h"))
      .addNote(new Note("m18n2", "r", "4", "8"))
      .addNote(new Note("m18n3", "E", "4", "8"))
      .addNote(new Note("m18n4", "E", "4", "8"))
      .addNote(new Note("m18n5", "A", "4", "8"))
      .addChord(new Chord("D/E", "h"))
      .addChord(new Chord("E", "h"))
      .addLyric(new Lyric("", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("何", "8"))
      .addLyric(new Lyric("時", "8"))
      .addLyric(new Lyric("我", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m19n1", "B", "4", "8"))
      .addNote(new Note("m19n2", "C", "5", "q."))
      .addNote(new Note("m19n3", "r", "4", "8"))
      .addNote(new Note("m19n4", "E", "4", "8"))
      .addNote(new Note("m19n5", "E", "4", "8"))
      .addNote(new Note("m19n6", "A", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("跌", "8"))
      .addLyric(new Lyric("倒", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("何", "8"))
      .addLyric(new Lyric("時", "8"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m20n1", "G", "4", "8"))
      .addNote(new Note("m20n2", "F", "5", "q."))
      .addNote(new Note("m20n3", "r", "4", "8"))
      .addNote(new Note("m20n4", "F", "4", "8"))
      .addNote(new Note("m20n5", "G", "4", "8"))
      .addNote(new Note("m20n6", "A", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("扶", "8"))
      .addLyric(new Lyric("持，", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("危", "8"))
      .addLyric(new Lyric("難", "8"))
      .addLyric(new Lyric("遇", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m21n1", "E", "5", "8"))
      .addNote(new Note("m21n2", "D", "5", "8"))
      .addNote(new Note("m21n3", "D", "5", "h"))
      .addNote(new Note("m21n4", "A", "4", "8"))
      .addNote(new Note("m21n5", "B", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("風", "8"))
      .addLyric(new Lyric("雪，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("祢", "8"))
      .addLyric(new Lyric("必", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m22n1", "A", "4", "8"))
      .addNote(new Note("m22n2", "G", "4", "q."))
      .addNote(new Note("m22n3", "r", "4", "8"))
      .addNote(new Note("m22n4", "E", "4", "8"))
      .addNote(new Note("m22n5", "E", "4", "8"))
      .addNote(new Note("m22n6", "A", "4", "8"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("庇", "8"))
      .addLyric(new Lyric("佑。", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("前", "8"))
      .addLyric(new Lyric("途", "8"))
      .addLyric(new Lyric("在", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m22n1", "B", "4", "8"))
      .addNote(new Note("m22n2", "C", "5", "q."))
      .addNote(new Note("m22n3", "r", "4", "8"))
      .addNote(new Note("m22n4", "E", "5", "8"))
      .addNote(new Note("m22n5", "A", "4", "8"))
      .addNote(new Note("m22n6", "A", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("祢", "8"))
      .addLyric(new Lyric("手，", "qd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("牽", "8"))
      .addLyric(new Lyric("我", "8"))
      .addLyric(new Lyric("到", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m23n1", "G", "4", "8"))
      .addNote(new Note("m23n2", "F", "4", "8"))
      .addNote(new Note("m23n3", "F", "4", "h"))
      .addNote(new Note("m23n4", "E", "5", "8"))
      .addNote(new Note("m23n5", "C", "5", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("白", "8"))
      .addLyric(new Lyric("頭，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("守", "8"))
      .addLyric(new Lyric("護", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m24n1", "D", "5", "h"))
      .addNote(new Note("m24n2", "r", "4", "8"))
      .addNote(new Note("m24n3", "F", "4", "8"))
      .addNote(new Note("m24n4", "C", "5", "8"))
      .addNote(new Note("m24n5", "D", "5", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("我，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("從", "8"))
      .addLyric(new Lyric("今", "8"))
      .addLyric(new Lyric("天", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m25n1", "B", "4", "h"))
      .addNote(
        new TripletNote([
          new Note("m25n2", "G", "4", "q"),
          new Note("m25n3", "A", "4", "q"),
          new Note("m25n4", "A", "4", "q")
        ])
      )
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("起，", "h"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("直", "8"))
      .addLyric(new Lyric("到", "8"))
      .addLyric(new Lyric("永", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("m26n1", "A", "4", "h."))
      .addChord(new Chord("A", "hd"))
      .addLyric(new Lyric("遠。", "hd"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addCurve(new Curve("m6n2", "m6n3"));
  singleVoiceScore.addCurve(new Curve("m7n2", "m7n3"));
  singleVoiceScore.addCurve(new Curve("m13n2", "m13n3"));
  singleVoiceScore.addCurve(new Curve("m14n2", "m14n3"));
  singleVoiceScore.addCurve(new Curve("m15n2", "m15n3"));
  singleVoiceScore.addCurve(new Curve("m17n3", "m18n1"));
  singleVoiceScore.addCurve(new Curve("m21n2", "m21n3"));
  singleVoiceScore.addCurve(new Curve("m23n2", "m23n3"));
  vfGenerator.generateSystems(singleVoiceScore);
  vfGenerator.draw();

  VfRegistry.disableDefaultRegistry();
}
