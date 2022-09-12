module.exports.Medicine = class Medicine {
    constructor() {
        if (this.constructor == Medicine) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
};
