const { Employee } = require("./Employee.js");

module.exports.ZooKeeper = class ZooKeeper extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.animalExperience = [];
    }
    AddAnimalExperience(animal) {
        this.animalExperience.push(animal.constructor.name);
        console.log("Zoo Keeper: " + this.firstName + " " + this.lastName + " now can work with " + animal.constructor.name);
    }

    HasAnimalExperience(animal) {
        if (this.animalExperience.includes(animal.constructor.name)) {
            return true;
        }
        return false;
    }

    FeedAnimal(animal, food) {
        animal.Feed(food, this);
    }
};
