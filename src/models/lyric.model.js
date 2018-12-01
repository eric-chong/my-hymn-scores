export default class Lyric {
  constructor(lyricWord, duration) {
    this.lyricWord = lyricWord;
    this.duration = duration;
  }

  getLyricWord() {
    return this.lyricWord;
  }

  getDuration() {
    return this.duration;
  }
}
