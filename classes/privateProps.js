class Astronaut {
  constructor(name, mission) {
    (this.name = name), (this.mission = mission);
  }
  introduce() {
    console.log(
      "Greetings, I am " +
        this.name +
        " and I am on the " +
        this.mission +
        " mission.."
    );
  }
}

const rankArr = [
  "private",
  "sergeant",
  "lieutenant",
  "major",
  "colonel",
  "major general",
];

const findIndexRank = (rank) => {
  return rankArr.findIndex((item) => item === rank.toLowerCase());
};

class Commander extends Astronaut {
  static isVeteran(age, rank) {
    return age >= 40 && findIndexRank(rank) >= 4;
  }
  #base = "";

  constructor(name, mission, rank) {
    super(name, mission);
    this.rank = rank;
  }
  introduce() {
    console.log(
      " Greetings, I am Commander " +
        this.name +
        " engaged in the " +
        this.mission +
        " mission holding the rank of " +
        this.rank
    );
  }
  get rankInfo() {
    return this.rank;
  }
  set rankInfo(newRank) {
    this.rank = newRank;
  }
  get baseInfo() {
    return this.#base;
  }

  set baseInfo(info) {
    this.#base = info;
  }
}

//Commander.isVeteran(50,'Major General');

const commander3 = new Commander("Chris Hadfield", "Expedition 35", "Colonel");
commander3.baseInfo = "ISS";
//console.log(commander3.rankInfo);
console.log(Commander.isVeteran(52, commander3.rankInfo)); // true
console.log(commander3.baseInfo); // ISS
commander3.introduce();
