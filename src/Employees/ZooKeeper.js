const { Grass } = require("../FoodTypes/Grass.js");
const { Meat } = require("../FoodTypes/Meat.js");
const { Vegetable } = require("../FoodTypes/Vegetable.js");
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

    FeedAnimal(animal) {
        let foodTypes = [new Grass(), new Meat(), new Vegetable()];
        let foodIndex = Math.floor(Math.random() * 3);
        animal.Feed(foodTypes[foodIndex], this);
    }
};
