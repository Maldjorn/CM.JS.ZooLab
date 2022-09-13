const { Mammal } = require("./Mammal.js");

class Bison extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.friends = ["Elephant"];
    }
}
