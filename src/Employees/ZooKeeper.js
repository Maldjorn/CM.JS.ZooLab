const { Employee } = require("./Employee.js");

class ZooKeeper extends Employee {
    constructor() {
        super();
        this.animalExperience = [];
    }
    AddAnimalExperience(animal) {
        this.animalExperience.push(animal.constructor.name);
    }

    HasAnimalExperience(animal) {
        if (this.animalExperience.includes(animal)) {
            return true;
        }
        return false;
    }

    FeedAnimal(animal, dateTime) {
        animal.Feed(dateTime, this);
    }
}
