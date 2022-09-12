const { Enclosure } = require("../Zoo/Enclosure.js");

class Zoo {
    constructor(employees, location) {
        this.enclosures = [];
        this.employees = employees;
        this.location = location;
    }

    AddEnclosure(name, squareFeet) {
        this.enclosures.push(new Enclosure(name, squareFeet, this));
    }

    FindAvailableEnclosure(animal) {
        if (this.enclosures.length !== 0) {
            this.enclosures.forEach((enclosure) => {
                if (!enclosure.squareFeet < animal.requiredSpaceSqFt) {
                    enclosure.animals.forEach((existingAnimal) => {
                        if (existingAnimal.IsFriendlyWith(animal)) {
                            console.log("Enclosure was find");
                            return enclosure;
                        } else {
                            console.log("Not freindly animals");
                        }
                    });
                } else {
                    console.log("No avaible space");
                }
            });
        } else {
            console.log("At least one enclosure required.");
        }
    }

    HireEmployee(IEmplyee) {}

    FeedAnimals(dateTime) {}

    HealAnimals(medicine) {}

    AddAnimal() {
        let availableEnclosure = this.FindAvailableEnclosure(animal);
        if (availableEnclosure !== null) {
            availableEnclosure.AddAnimal(animal);
        } else console.log(`You cannot add ${animal.className} to a filled enclosure.`);
    }
}
