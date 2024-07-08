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

class Commander extends Astronaut {
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
    return "Rank is: " + this.rank;
  }
  set rankInfo(newRank) {
    this.rank = newRank;
  }
}

const astronaut1 = new Astronaut("Tom", "Moon 2024");
astronaut1.introduce();

const commander1 = new Commander("Buzz Aldrin", "Apollo 11", "Colonel");
commander1.introduce();

const commander2 = new Commander(
  "Michael Collins",
  "Apollo 11",
  "Major General"
);
console.log(commander2.rankInfo); // Major General
commander2.rankInfo = "Lieutenant General";
console.log(commander2.rank); // Lieutenant General
commander2.introduce(); // Greetings, I am Commander Michael Collins, engaged in the Apollo 11 mission holding the rank of Lieutenant General.
