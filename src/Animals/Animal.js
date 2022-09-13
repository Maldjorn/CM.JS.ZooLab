module.exports.Animal = class Animal {
    constructor() {
        this.id = Math.floor(Math.random() * 500);
        this.requiredSpaceSqFt;
        this.favoriteFood;
        this.feedTimes = [];
        this.feedSchedule = [];
        this.friendlyWith = [];
        this.IsSick = this.id % 2 == 0 ? true : false;
        if (this.constructor == Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    IsFriendlyWith(animal) {
        return this.friendlyWith.includes(animal);
    }
    Feed(food, zooKeeper) {
        throw new Error("Method 'Feed' must be implemented.");
    }
    AddFeedSchedule(hours) {
        this.feedSchedule = hours;
    }
    Heal(medicine) {
        this.IsSick = false;
    }
};
