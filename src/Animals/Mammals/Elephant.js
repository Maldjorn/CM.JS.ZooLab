const { Mammal } = require("./Mammal.js");

module.exports.Elephant = class Elephant extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.friends = ["Bison", "Parrot", "Turtle"];
    }
};
