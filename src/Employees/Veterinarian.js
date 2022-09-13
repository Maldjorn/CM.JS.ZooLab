const { Employee } = require("./Employee.js");

module.exports.Veterinarian = class Veterinarian extends Employee {
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

    HealAnimal(animal, medicine) {
        if (animal.IsSick == true && this.HasAnimalExperience(animal)) {
            animal.Heal(medicine);
            console.log(animal + " was healed by " + this.firstName + " " + this.lastName);
        }
    }
};
