const { Employee } = require("./Employee.js");

module.exports.Veterinarian = class Veterinarian extends Employee {
    constructor(firstName, lastName) {
        super(firstName, lastName);
        this.animalExperience = [];
    }

    AddAnimalExperience(animal) {
        this.animalExperience.push(animal.constructor.name);
        console.log("Veterinarian: " + this.firstName + " " + this.lastName + " now can work with " + animal.constructor.name);
    }

    HasAnimalExperience(animal) {
        if (this.animalExperience.includes(animal.constructor.name)) {
            return true;
        }
        return false;
    }

    HealAnimal(animal, medicine) {
        if (animal.isSick == true && this.HasAnimalExperience(animal)) {
            animal.Heal(medicine);
            console.log(animal.constructor.name + " was healed by " + this.firstName + " " + this.lastName);
        }
    }
};
