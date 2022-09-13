const { Employee } = require("./Employee.js");

class ZooKeeper extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
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
}
