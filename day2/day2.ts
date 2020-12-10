import puzzleInput from "./input.ts";

class PasswordPhilosophy {
  constructor(private puzzleInput: string[]) {}
  partOne(): number {
    let numberOfvalidPasswords = 0;

    for (let item of this.puzzleInput) {
      let splitted = item.split(":", 2);
      let splittedPolicies = splitted[0].split(" ", 2);
      let minAndMax = splittedPolicies[0].split("-", 2);
      let minNumberOfTimes = Number(minAndMax[0]);
      let maxNumberOfTimes = Number(minAndMax[1]);
      let letterWithRestriction = splittedPolicies[1];
      let password = splitted[1].trim();

      let regex = new RegExp(letterWithRestriction, "g");
      let numOcurrencesInLetter = (password.match(regex) || []).length;

      if (
        this.isValidPasswordPartOne(
          minNumberOfTimes,
          numOcurrencesInLetter,
          maxNumberOfTimes
        )
      ) {
        numberOfvalidPasswords++;
      }
    }

    return numberOfvalidPasswords;
  }

  private isValidPasswordPartOne(
    minNumberOfTimes: number,
    numOcurrencesInLetter: number,
    maxNumberOfTimes: number
  ) {
    return (
      numOcurrencesInLetter >= minNumberOfTimes &&
      numOcurrencesInLetter <= maxNumberOfTimes
    );
  }

  partTwo() {
    let numberOfvalidPasswords = 0;

    for (let pasword of this.puzzleInput) {
      let splitted = pasword.split(": ", 2);
      let splittedPolicies = splitted[0].split(" ", 2);
      let positions = splittedPolicies[0].split("-", 2);
      let position1 = Number(positions[0]);
      let position2 = Number(positions[1]);
      let letterWithRestriction = splittedPolicies[1];
      let pass = splitted[1];

      if (
        this.isValidPasswordPartTwo(
          pass,
          letterWithRestriction,
          position1,
          position2
        )
      ) {
        numberOfvalidPasswords++;
      }
    }

    return numberOfvalidPasswords;
  }

  private isValidPasswordPartTwo(
    password: string,
    letterWithRestriction: string,
    position1: number,
    position2: number
  ) {
    let letterAtPosition1 = password.charAt(position1 - 1);
    let letterAtPosition2 = password.charAt(position2 - 1);
    return (
      [...letterAtPosition1, letterAtPosition2].filter(
        (x) => x === letterWithRestriction
      ).length === 1
    );
  }
}

let password = new PasswordPhilosophy(puzzleInput);

console.log(
  "Número de passwords válidas en Part One del puzzle: ",
  password.partOne()
);
console.log(
  "Número de passwords válidas en Part Two del puzzle: ",
  password.partTwo()
);
