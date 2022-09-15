const { Bird } = require("./Bird.js");

module.exports.Penguin = class Penguin extends Bird {
    constructor() {
        super();
        this.requiredSpaceSqFt = 10;
        this.friends = ["Penguin"];
    }
};
