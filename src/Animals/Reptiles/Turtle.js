const { Reptile } = require("./Reptile.js");

class Turtle extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 5;
        this.friends = ["Parrot", "Bison", "Elephant", "Turtle"];
    }
}
