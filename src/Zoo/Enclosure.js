module.exports.Enclosure = class Enclosure {
    constructor(name, squareFeet, parentZoo) {
        this.name = name;
        this.squareFeet = squareFeet;
        this.parentZoo = parentZoo;
        this.animals = [];
    }
    AddAnimal(animal) {
        if (this.squareFeet < animal.requiredSpaceSqFt) {
            throw new Error("No available space");
        }
        if (this.animals.length != 0) {
            for (let i = 0; i < this.animals.length; i++) {
                if (!animal.IsFriendlyWith(this.animals[i])) {
                    throw new Error("Not friendly animal");
                }
            }
        }

        this.squareFeet -= animal.requiredSpaceSqFt;
        this.animals.push(animal);
        console.log("Animal added to " + this.name);
    }
};
