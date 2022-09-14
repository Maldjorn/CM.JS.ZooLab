const { FeedTime } = require("./FeedTime.js");

module.exports.Animal = class Animal {
    constructor() {
        this.id = Math.floor(Math.random() * 500);
        this.requiredSpaceSqFt;
        this.favoriteFood;
        this.feedTimes = [];
        this.feedSchedule = [];
        this.friends = [];
        this.isSick = this.id % 2 == 0 ? true : false;
        if (this.constructor == Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
    IsFriendlyWith(animal) {
        return this.friends.includes(animal.constructor.name);
    }
    Feed(food, zooKeeper) {
        this.feedTimes.push(new FeedTime(new Date(), zooKeeper));
        console.log(
            this.constructor.name + " was fed by " + zooKeeper.firstName + " " + zooKeeper.lastName + " with " + food.constructor.name
        );
    }
    AddFeedSchedule(hours) {
        this.feedSchedule = hours;
    }
    Heal(medicine) {
        this.isSick = false;
    }
};
