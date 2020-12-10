import puzzleInput from "./input.ts";

class TobogganTrajectory {
  private static TREE: string = "X";
  private static EMPTY: string = "O";

  constructor(private inputPuzzle: string[]) {
    while (this.inputPuzzle[0].length < this.inputPuzzle.length * 7 + 1) {
      for (let i = 0; i < this.inputPuzzle.length; i++) {
        this.inputPuzzle[i] += this.inputPuzzle[i];
      }
    }
  }

  partOne() {
    return this.numTrees(3, 1);
  }

  partTwo() {
    return (
      this.numTrees(1, 1) *
      this.numTrees(3, 1) *
      this.numTrees(5, 1) *
      this.numTrees(7, 1) *
      this.numTrees(1, 2)
    );
  }

  private numTrees(slopeRight: number, slopeDown: number) {
    let path: string[] = [];

    let ejeX = 1;
    for (let i = slopeDown; i < this.inputPuzzle.length; i += slopeDown) {
      path.push(
        this.inputPuzzle[i][ejeX++ * slopeRight] === "#"
          ? TobogganTrajectory.TREE
          : TobogganTrajectory.EMPTY
      );
    }

    return path.filter((x) => x === TobogganTrajectory.TREE).length;
  }
}

let toboggan = new TobogganTrajectory(puzzleInput);

console.log("Part One del puzzle -> Número de árboles en la ruta: ", toboggan.partOne());
console.log("Part Two del puzzle -> Número de árboles en la ruta: ", toboggan.partTwo());
