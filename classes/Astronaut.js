class Astronaut {
    constructor(name,mission) {
        this.name = name,
        this.mission = mission
    }
    introduce() {
        console.log('Greetings, I am '+ this.name + ' and I am on the ' + this.mission +' mission..');
    }
}

const astronaut = new Astronaut('Tom', 'Moon 2024');

astronaut.introduce();