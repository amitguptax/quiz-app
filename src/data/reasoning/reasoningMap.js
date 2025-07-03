export const reasoningMap = {
  "number-series": () => import("./numberSeries"),
  "odd-one-out": () => import("./oddOneOut"),
  "coding-decoding": () => import("./codingDecoding"),
  "direction-sense": () => import("./directionSense"),
  "blood-relations": () => import("./bloodRelations"),
  "syllogism": () => import("./syllogism"),
  "alphabet-series": () => import("./alphabetSeries"),
  "logical-puzzles": () => import("./logicalPuzzles"),
  "embedded-figure": () => import("./embeddedFigure"),
};
