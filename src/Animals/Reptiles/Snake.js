const { Reptile } = require("./Reptile.js");

module.exports.Snake = class Snake extends Reptile {
    constructor() {
        super();
        this.requiredSpaceSqFt = 2;
        this.friends = ["Snake"];
    }
};
