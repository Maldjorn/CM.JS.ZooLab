const { Parrot } = require("../src/Animals/Birds/Parrot");
const { Snake } = require("../src/Animals/Reptiles/Snake");
const { Enclosure } = require("../src/Zoo/Enclosure");

test("shold not be able to add animal to enclosure", () => {
    var enclosure = new Enclosure("Los", 1000);
    expect(() => {
        enclosure.AddAnimal(new Parrot());
        enclosure.AddAnimal(new Snake());
    }).toThrow("Not friendly animal");
});
test("shold not be able to add animal to enclosure", () => {
    var enclosure = new Enclosure("Los", 1);
    expect(() => {
        enclosure.AddAnimal(new Parrot());
    }).toThrow("No available space");
});
