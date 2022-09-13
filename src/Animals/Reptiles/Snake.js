const { Reptile } = require("./Reptile.js");

class Turtle extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 2;
        this.friends = ["Snake"];
    }
}
