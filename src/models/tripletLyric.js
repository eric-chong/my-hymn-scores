import Lyric from "./lyric.model";

export default class TripletLyric {
  constructor(lyrics) {
    if (lyrics.length !== 3) throw "triplet needs 3 notes";
    if (lyrics.some(lyric => !lyric instanceof Lyric))
      throw "should consist of only Note";

    this._lyrics = lyrics;
  }

  getLyrics() {
    return this._lyrics;
  }

  getDuration() {
    const valueMap = {
      "32": "16",
      "16": "8",
      "8": "q",
      q: "h",
      h: "w"
    };
    return valueMap[this._lyrics[0].getDuration()];
  }
}
