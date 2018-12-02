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

const FONT = {
  family: "Arial",
  size: 14,
  weight: ""
};

const vfFactory = VF.Flow.Factory;
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
  // this.vf = new vfFactory({
  //   renderer: { elementId: elementId, width: 900, height: 1200 }
  // });
  const vfGenerator = new VfGenerator(
    elementId,
    singleVoiceScore.getTimeSignature(),
    900,
    1200
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "A", "3", "8"))
      .addNote(new Note("", "B", "3", "8"))
      .addChord(new Chord("", "q"))
      .addLyric(new Lyric("我", "8"))
      .addLyric(new Lyric("唱", "8"))
      .setMeasureBar("thinDouble")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "C", "4", "h."))
      .addNote(new Note("", "B", "3", "8"))
      .addNote(new Note("", "C", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("出，", "hd"))
      .addLyric(new Lyric("神", "8"))
      .addLyric(new Lyric("大", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "E", "4", "h."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("愛，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("神", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "A", "4", "q"))
      .addNote(new Note("", "F", "4", "q"))
      .addNote(new Note("", "A", "3", "8"))
      .addNote(new Note("", "A", "3", "q"))
      .addNote(new Note("", "E", "4", "8"))
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
      .addNote(new Note("", "C", "4", "h."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("事，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("人", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "A", "4", "8"))
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "F", "4", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "A", "3", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("生", "8"))
      .addLyric(new Lyric("路，", "hd"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "E", "4", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "D", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("起", "8"))
      .addLyric(new Lyric("跌，", "hd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "C", "4", "8"))
      .addNote(new Note("", "D", "4", "q"))
      .addNote(new Note("", "D", "4", "16"))
      .addNote(new Note("", "D", "4", "16"))
      .addNote(new Note("", "D", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "C", "4", "8"))
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
      .addNote(new Note("", "B", "3", "h."))
      .addNote(new Note("", "A", "3", "8"))
      .addNote(new Note("", "B", "3", "8"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("搖。", "hd"))
      .addLyric(new Lyric("在", "8"))
      .addLyric(new Lyric("世", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "C", "4", "h."))
      .addNote(new Note("", "B", "3", "8"))
      .addNote(new Note("", "C", "4", "8"))
      .addChord(new Chord("A", "w"))
      .addLyric(new Lyric("間，", "hd"))
      .addLyric(new Lyric("能", "8"))
      .addLyric(new Lyric("遇", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "E", "4", "h."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("祢，", "hd"))
      .addLyric(new Lyric("", "8"))
      .addLyric(new Lyric("迷", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "A", "4", "q"))
      .addNote(new Note("", "F", "4", "q"))
      .addNote(new Note("", "E", "4", "q."))
      .addNote(new Note("", "F", "4", "8"))
      .addChord(new Chord("F#m", "w"))
      .addLyric(new Lyric("了", "q"))
      .addLyric(new Lyric("路", "q"))
      .addLyric(new Lyric("有", "qd"))
      .addLyric(new Lyric("主", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "C", "4", "8"))
      .addNote(new Note("", "C", "4", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "A", "3", "8"))
      .addChord(new Chord("C#m", "w"))
      .addLyric(new Lyric("引", "8"))
      .addLyric(new Lyric("導。", "h"))
      .addLyric(new Lyric("", "q"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "A", "4", "8"))
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "F", "4", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "A", "3", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("施", "8"))
      .addLyric(new Lyric("恩，", "hd"))
      .addLyric(new Lyric("常", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "E", "4", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "D", "4", "8"))
      .addChord(new Chord("D", "w"))
      .addLyric(new Lyric("看", "8"))
      .addLyric(new Lyric("顧，", "hd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "C", "4", "q."))
      .addNote(new Note("", "B", "3", "8"))
      .addNote(new Note("", "B", "3", "q."))
      .addNote(new Note("", "F", "4", "8"))
      .addChord(new Chord("Bm", "w"))
      .addLyric(new Lyric("杖", "qd"))
      .addLyric(new Lyric("扶", "8"))
      .addLyric(new Lyric("持，", "qd"))
      .addLyric(new Lyric("祢", "8"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "G", "4", "q."))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "E", "4", "h"))
      .addChord(new Chord("E", "w"))
      .addLyric(new Lyric("竿", "qd"))
      .addLyric(new Lyric("引", "8"))
      .addLyric(new Lyric("領，", "h"))
      .setMeasureBar("singleRight")
  );
  singleVoiceScore.addMeasure(
    new Measure()
      .addNote(new Note("", "E", "4", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "A", "4", "8"))
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
      .addNote(new Note("", "B", "4", "8"))
      .addNote(new Note("", "C", "5", "q."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "A", "4", "8"))
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
      .addNote(new Note("", "G", "4", "8"))
      .addNote(new Note("", "F", "5", "q."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "G", "4", "8"))
      .addNote(new Note("", "A", "4", "8"))
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
      .addNote(new Note("", "E", "5", "8"))
      .addNote(new Note("", "D", "5", "8"))
      .addNote(new Note("", "D", "5", "h"))
      .addNote(new Note("", "A", "4", "8"))
      .addNote(new Note("", "B", "4", "8"))
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
      .addNote(new Note("", "A", "4", "8"))
      .addNote(new Note("", "G", "4", "q."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "E", "4", "8"))
      .addNote(new Note("", "A", "4", "8"))
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
      .addNote(new Note("", "B", "4", "8"))
      .addNote(new Note("", "C", "5", "q."))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "E", "5", "8"))
      .addNote(new Note("", "A", "4", "8"))
      .addNote(new Note("", "A", "4", "8"))
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
      .addNote(new Note("", "G", "4", "8"))
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "F", "4", "h"))
      .addNote(new Note("", "E", "5", "8"))
      .addNote(new Note("", "C", "5", "8"))
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
      .addNote(new Note("", "D", "5", "h"))
      .addNote(new Note("", "r", "4", "8"))
      .addNote(new Note("", "F", "4", "8"))
      .addNote(new Note("", "C", "5", "8"))
      .addNote(new Note("", "D", "5", "8"))
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
      .addNote(new Note("", "B", "4", "h"))
      .addNote(
        new TripletNote([
          new Note("", "G", "4", "q"),
          new Note("", "A", "4", "q"),
          new Note("", "A", "4", "q")
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
      .addNote(new Note("", "A", "4", "h."))
      .addChord(new Chord("A", "hd"))
      .addLyric(new Lyric("遠。", "hd"))
      .setMeasureBar("singleRight")
  );
  vfGenerator.generateSystems(singleVoiceScore);
  vfGenerator.draw();

  VfRegistry.disableDefaultRegistry();
}
