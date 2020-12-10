import puzzleInput from "./input.ts";

class PassportProcessing {
  private readonly passports: string[];
  private readonly dictionary: string[][]; //Record<string, string>[] = [];

  constructor(puzzleInput: string) {
    this.passports = puzzleInput.split("\n\n");

    //let splitted = this.passports.map((x) => x.replace(/\n/g, " ").split(" ")); //.split(" "); //.map(x => x.split(" "));
    this.dictionary = this.passports.map((x) => x.replace(/\n/g, " ").split(" "));

    console.log(this.dictionary[0]);
    console.log(this.dictionary[1]);
    console.log(this.dictionary[2]);
    console.log(this.dictionary[3]);
    // let jaja = splitted.map((x) => x.map((item) => this.dictionary.push({ x: "ss" })));

    // for (let passportData of splitted) {
    //   passportData.forEach((x) => {
    //     let data = x.split(":");
    //     this.dictionary[0] = { [data[0]]: data[1] };
    //   });
    //   console.log(this.dictionary);
    // }

    // .map(x => dictionary.push({
    //     "",""
    // }));
  }

  partOne() {
    let regexp = new RegExp(
      "(?=.*eyr:)(?=.*hgt:)(?=.*hcl:)(?=.*ecl:)(?=.*pid:)(?=.*byr:)(?=.*iyr:)",
      "gs"
    );

    return this.passports.filter((x) => regexp.test(x)).length;
  }

  //isValidBirthYear(data: Record<string, string>) {
  isValidBirthYear(data: string[]) {
    let byr = Number(data["byr"]);
    return byr >= 1920 && byr <= 2002;
  }

  isValidIssueYear(data: string[]) {
    //(data: Record<string, string>) {
    let iyr = Number(data["iyr"]);
    return iyr >= 2010 && iyr <= 2020;
  }

  isValidExpirationYear(data: string[]) {
    // (data: Record<string, string>) {
    let eyr = Number(data["eyr"]);
    return eyr >= 2020 && eyr <= 2030;
  }

  isValidHeight(data: string[]) {
    //(data: Record<string, string>) {
    let match = data["hgt"].match("^(?<value>d{2,3})(?<unit>cm|in)$");
    if (!match) {
      return false;
    }

    let hgt = Number(match[0]);
    return (
      (match[1] === "cm" && hgt >= 150 && hgt <= 193) ||
      (match[1] === "in" && hgt >= 59 && hgt <= 76)
    );
  }

  isValidHairColor(data: string[]) {
    //(data: Record<string, string>) {
    return data["hcl"].match("^#[0-9a-f]{6}$")!.length > 0;
  }

  isValidEyeColor(data: string[]) {
    //(data: Record<string, string>) {
    return data["ecl"].match("(amb|blu|brn|gry|grn|hzl|oth)")!.length > 0;
  }

  isValidPassportID(data: string[]) {
    //(data: Record<string, string>) {
    return data["pid"].match("^d{9}$")!.length > 0;
  }

  partTwo() {
    return this.dictionary.filter(
      (x) =>
        this.isValidBirthYear(x) &&
        this.isValidIssueYear(x) &&
        this.isValidExpirationYear(x) &&
        this.isValidHeight(x) &&
        this.isValidHairColor(x) &&
        this.isValidEyeColor(x) &&
        this.isValidPassportID(x)
    ).length;
  }
}

let passport = new PassportProcessing(puzzleInput);

console.log("Part One del puzzle -> Número de passports válidos: ", passport.partOne());
console.log("Part Two del puzzle -> Número de passports válidos: ", passport.partTwo());
