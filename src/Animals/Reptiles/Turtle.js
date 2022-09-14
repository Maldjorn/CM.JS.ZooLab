const { Reptile } = require("./Reptile.js");

module.exports.Turtle = class Turtle extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.friends = ["Parrot", "Bison", "Elephant", "Turtle"];
    }
};
