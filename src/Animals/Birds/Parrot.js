const { Bird } = require("./Bird.js");

module.exports.Parrot = class Parrot extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.friends = ["Parrot", "Bison", "Elephant", "Turtle"];
    }
};
