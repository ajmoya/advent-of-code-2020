import puzzleInput from "./input.ts";

class PasswordPhilosophy {
  constructor(private puzzleInput: string[]) {}
  partOne(): number {
    let numberOfvalidPasswords = 0;

    for (const item of this.puzzleInput) {
      const splitted = item.split(":", 2);
      const splittedPolicies = splitted[0].split(" ", 2);
      const minAndMax = splittedPolicies[0].split("-", 2);
      const minNumberOfTimes = Number(minAndMax[0]);
      const maxNumberOfTimes = Number(minAndMax[1]);
      const letterWithRestriction = splittedPolicies[1];
      const password = splitted[1].trim();

      const regex = new RegExp(letterWithRestriction, "g");
      const numOcurrencesInLetter = (password.match(regex) || []).length;

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

    for (const item of this.puzzleInput) {
      const splitted = item.split(": ", 2);
      const splittedPolicies = splitted[0].split(" ", 2);
      const positions = splittedPolicies[0].split("-", 2);
      const position1 = Number(positions[0]);
      const position2 = Number(positions[1]);
      const letterWithRestriction = splittedPolicies[1];
      const password = splitted[1];

      if (
        this.isValidPasswordPartTwo(
          password,
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
    const letterAtPosition1 = password.charAt(position1 - 1);
    const letterAtPosition2 = password.charAt(position2 - 1);
    return (
      [...letterAtPosition1, letterAtPosition2].filter(
        (x) => x === letterWithRestriction
      ).length === 1
    );
  }
}

const password = new PasswordPhilosophy(puzzleInput);

console.log(
  "Número de passwords válidas en Part One del puzzle: ",
  password.partOne()
);
console.log(
  "Número de passwords válidas en Part Two del puzzle: ",
  password.partTwo()
);
