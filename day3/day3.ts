import puzzleInput from "./input.ts";

class TobogganTrajectory {
  private static TREE = "X";
  private static EMPTY = "O";

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
    const path: string[] = [];

    let ejeX = 1;
    for (let i = slopeDown; i < puzzleInput.length; i += slopeDown) {
      path.push(
        puzzleInput[i][(ejeX++ * slopeRight) % puzzleInput[0].length] === "#"
          ? TobogganTrajectory.TREE
          : TobogganTrajectory.EMPTY
      );
    }

    return path.filter((x) => x === TobogganTrajectory.TREE).length;
  }
}

const toboggan = new TobogganTrajectory();

console.log(
  "Part One del puzzle -> Número de árboles en la ruta: ",
  toboggan.partOne()
);
console.log(
  "Part Two del puzzle -> Número de árboles en la ruta: ",
  toboggan.partTwo()
);
