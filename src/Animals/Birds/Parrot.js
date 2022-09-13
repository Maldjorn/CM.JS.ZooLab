const { Bird } = require("./Bird.js");

class Parrot extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.friends = ["Parrot", "Bison", "Elephant", "Turtle"];
    }
}
