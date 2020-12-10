import puzzleInput from "./input.ts";

class ReportRepair {
  partOne(): number {
    let complement: Record<number, boolean> = {};

    for (let num of puzzleInput) {
      complement[num] = true;

      let toFind = 2020 - num;

      if (complement[toFind]) {
        return toFind * num;
      }
    }

    return 0;
  }

  partTwo() {
    for (let numA of puzzleInput) {
      for (let numB of puzzleInput) {
        for (let numC of puzzleInput) {
          if (numA + numB + numC === 2020) {
            return numA * numB * numC;
          }
        }
      }
    }

    return 0;
  }
}

let report = new ReportRepair();

console.log("Key válida en Part One del puzzle: ", report.partOne());
console.log("Key válida en Part Two del puzzle: ", report.partTwo());
