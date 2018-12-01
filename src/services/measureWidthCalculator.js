const NOTE_WIDTH_MAP = {
  w: 120,
  "h.": 100,
  h: 80,
  "q.": 65,
  q: 55,
  "8": 35,
  "16": 30,
  "32": 10
};

export default class MeasureWidthCalculator {
  static calcWidth(measure) {
    const notes = measure.getNotes();
    let width = 0;
    return notes.reduce((width, currNote) => {
      return width + NOTE_WIDTH_MAP[currNote.getValue()];
    }, 0);
  }
}
