const { Mammal } = require("./Mammal.js");

module.exports.Bison = class Lion extends Mammal {
    constructor() {
        super();
        this.requiredSpaceSqFt = 1000;
        this.friends = ["Lion"];
    }
};
