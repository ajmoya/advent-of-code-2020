import puzzleInput from "./input.ts";

class ReportRepair {
  partOne(): number {
    const complement: Record<number, boolean> = {};

    for (const num of puzzleInput) {
      complement[num] = true;

      const toFind = 2020 - num;

      if (complement[toFind]) {
        return toFind * num;
      }
    }

    return 0;
  }

  partTwo() {
    for (const numA of puzzleInput) {
      for (const numB of puzzleInput) {
        for (const numC of puzzleInput) {
          if (numA + numB + numC === 2020) {
            return numA * numB * numC;
          }
        }
      }
    }

    return 0;
  }
}

const report = new ReportRepair();

console.log("Key válida en Part One del puzzle: ", report.partOne());
console.log("Key válida en Part Two del puzzle: ", report.partTwo());
