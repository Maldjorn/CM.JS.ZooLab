const { Bird } = require("./Bird.js");

class Penguin extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 10;
        this.friends = ["Penguin"];
    }
}
