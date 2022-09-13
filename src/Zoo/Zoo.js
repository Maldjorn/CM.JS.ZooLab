const { Enclosure } = require("../Zoo/Enclosure.js");

module.exports.Zoo = class Zoo {
    constructor(location) {
        this.enclosures = [];
        this.employees = [];
        this.location = location;
    }

    AddEnclosure(name, squareFeet) {
        this.enclosures.push(new Enclosure(name, squareFeet, this));
        console.log("enclosure added to " + this.location);
    }

    FindAvailableEnclosure(animal) {
        if (this.enclosures.length !== 0) {
            for (let i = 0; i < this.enclosures.length; i++) {
                if (!this.enclosures[i].squareFeet < animal.requiredSpaceSqFt) {
                    if (this.enclosures[i].animals.length === 0) {
                        console.log("Enclosure was find");
                        return this.enclosures[i];
                    }
                    for (let j = 0; j < this.enclosures[i].animals.length; j++) {
                        if (this.enclosures[i].animals[j].IsFriendlyWith(animal)) {
                            console.log("Enclosure was find");
                            return enclosure;
                        } else {
                            console.log("Not freindly animals");
                            return undefined;
                        }
                    }
                } else {
                    console.log("No avaible space");
                    return undefined;
                }
            }
        } else {
            console.log("No enclosures");
            return undefined;
        }
    }

    HireEmployee(employee) {
        this.employees.push(employee);
        //TODO: add logic
    }

    FeedAnimals(food) {
        let animal = this.GetAnimalList();
        let avaibleZooKeeperIndex = 0;
        for (let i = 0; i < animal.length; i++) {
            let zooKeepers = this.GetZooKeeperList();
            for (let j = 0; j < animal[i].feedSchedule.length; j++) {
                if (zooKeepers[avaibleZooKeeperIndex].HasAnimalExperience(animal[i])) {
                    zooKeepers[avaibleZooKeeperIndex].FeedAnimal(animal[i], food);
                    avaibleZooKeeperIndex++;
                }
                if (avaibleZooKeeperIndex >= zooKeepers.length) {
                    avaibleZooKeeperIndex = 0;
                }
            }
        }
    }

    HealAnimals(medicine) {}

    AddAnimal() {
        let availableEnclosure = this.FindAvailableEnclosure(animal);
        if (availableEnclosure !== null) {
            availableEnclosure.AddAnimal(animal);
        } else console.log(`You cannot add ${animal.className} to a filled enclosure.`);
    }

    GetAnimalList() {
        let animals = [];
        this.enclosures.forEach((enclosure) => {
            enclosure.animals.forEach((animal) => {
                animals.push(animal);
            });
        });
        return animals;
    }

    GetZooKeeperList() {
        let zooKeepers = [];
        this.employees.forEach((employee) => {
            if (employee.constructor.name == "ZooKeeper") {
                zooKeepers.push(employee);
            }
        });
        return zooKeepers;
    }
};
