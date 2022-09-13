const { Mammal } = require("./Mammal.js");

class Lion extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.friends = ["Lion"];
    }
}
