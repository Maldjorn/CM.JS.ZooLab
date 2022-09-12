module.exports.Animal = class Animal {
    constructor() {
        if (this.constructor == Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    IsFriendlyWith(animal) {
        throw new Error("Method 'IsFriendlyWith' must be implemented.");
    }
    Feed(food, zooKeeper) {
        throw new Error("Method 'Feed' must be implemented.");
    }
    AddFeedSchedule(hours) {
        throw new Error("Method 'AddFeedSchedule' must be implemented.");
    }
    Heal(medicine) {
        throw new Error("Method 'AddFeedSchedule' must be implemented.");
    }
};
