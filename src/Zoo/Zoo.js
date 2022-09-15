const { Enclosure } = require("../Zoo/Enclosure.js");
const { HireValidatorProvider } = require("../Validator/HireValidatorProvider.js");

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
                if (!(this.enclosures[i].squareFeet < animal.requiredSpaceSqFt)) {
                    if (this.enclosures[i].animals.length === 0) {
                        console.log("Enclosure was find");
                        return this.enclosures[i];
                    }
                    for (let j = 0; j < this.enclosures[i].animals.length; j++) {
                        if (this.enclosures[i].animals[j].IsFriendlyWith(animal)) {
                            console.log("Enclosure was find");
                            return this.enclosures[i];
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
        let validator = new HireValidatorProvider();
        let isValid = validator.ValidateEmployee(employee, this);
        if (isValid) {
            this.employees.push(employee);
            console.log("Employee hired");
        } else {
            throw new Error("No animal experience");
        }
        //TODO: add logic
    }

    FeedAnimals() {
        let animal = this.GetAnimalList();
        let avaibleZooKeeperIndex = 0;
        for (let i = 0; i < animal.length; i++) {
            let zooKeepers = this.GetZooKeeperList();
            for (let j = 0; j < animal[i].feedSchedule.length; j++) {
                if (zooKeepers[avaibleZooKeeperIndex].HasAnimalExperience(animal[i])) {
                    zooKeepers[avaibleZooKeeperIndex].FeedAnimal(animal[i]);
                    avaibleZooKeeperIndex++;
                }
                if (avaibleZooKeeperIndex >= zooKeepers.length) {
                    avaibleZooKeeperIndex = 0;
                }
            }
        }
    }

    HealAnimals(medicine) {
        let animal = this.GetAnimalList();
        let avaibleVeterinarianIndex = 0;
        let veterinarians = this.GetVeterinarianList();
        for (let i = 0; i < animal.length; i++) {
            if (veterinarians[avaibleVeterinarianIndex].HasAnimalExperience(animal[i])) {
                veterinarians[avaibleVeterinarianIndex].HealAnimal(animal[i], medicine);
                avaibleVeterinarianIndex++;
            }
            if (avaibleVeterinarianIndex >= veterinarians.length) {
                avaibleVeterinarianIndex = 0;
            }
        }
    }

    AddAnimal(animal) {
        let availableEnclosure = this.FindAvailableEnclosure(animal);
        if (availableEnclosure !== null) {
            availableEnclosure.AddAnimal(animal);
        }
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

    GetVeterinarianList() {
        let veterinarians = [];
        this.employees.forEach((employee) => {
            if (employee.constructor.name == "Veterinarian") {
                veterinarians.push(employee);
            }
        });
        return veterinarians;
    }
};
