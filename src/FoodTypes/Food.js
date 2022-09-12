module.exports.Food = class Food {
    constructor() {
        if (this.constructor == Food) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
};
