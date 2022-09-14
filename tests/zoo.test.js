const { Zoo } = require("../src/Zoo/Zoo.js");
const { Parrot } = require("../src/Animals/Birds/Parrot.js");
const { Snake } = require("../src/Animals/Reptiles/Snake.js");
const { ZooKeeper } = require("../src/Employees/ZooKeeper.js");
const { Grass } = require("../src/FoodTypes/Grass.js");
const { Veterinarian } = require("../src/Employees/Veterinarian.js");
const { Antibiotics } = require("../src/Medicine/Antibiotics.js");

test("Should be able to create Zoo", () => {
    let zoo = new Zoo("Mexico");
    expect(zoo.location).toBe("Mexico");
});

test("Should be able to add enclosure", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    expect(zoo.enclosures.length).toBe(1);
});

test("Should be able to find available enclosure", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    expect(zoo.FindAvailableEnclosure(new Parrot()).name).toBe("Los");
});

test("Should not be able to find available enclosure", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1);
    expect(zoo.FindAvailableEnclosure(new Parrot())).toBeFalsy();
});

test("Should not be able to find available enclosure with not friendly animals", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    zoo.AddAnimal(new Snake());
    expect(zoo.FindAvailableEnclosure(new Parrot())).toBeFalsy();
});

test("Should not be able to add find available enclosure with no enclosures", () => {
    let zoo = new Zoo("Mexico");
    expect(zoo.FindAvailableEnclosure(new Parrot())).toBeFalsy();
});

test("Should be able to hire employee zoo keeper", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    let snake = new Snake();
    zoo.AddAnimal(snake);
    let zooKeeper = new ZooKeeper();
    zooKeeper.AddAnimalExperience(snake);
    zoo.HireEmployee(zooKeeper);
    expect(zoo.employees.length).toBe(1);
});

test("Should not be able to hire employee zoo keeper", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    let snake = new Snake();
    zoo.AddAnimal(snake);
    let zooKeeper = new ZooKeeper();
    expect(() => {
        zoo.HireEmployee(zooKeeper);
    }).toThrow("No animal experience");
});

test("Should  be able to feed animals", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    let snake = new Snake();
    snake.AddFeedSchedule([1]);
    zoo.AddAnimal(snake);
    let zooKeeper = new ZooKeeper("Andrew", "Last");
    zooKeeper.AddAnimalExperience(snake);
    zoo.HireEmployee(zooKeeper);
    zoo.FeedAnimals(new Grass());
    expect(zoo.enclosures[0].animals[0].feedTimes.length).toBe(1);
});

test("Should be able to hire employee veterinarian", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    let snake = new Snake();
    zoo.AddAnimal(snake);
    let veterinarian = new Veterinarian();
    veterinarian.AddAnimalExperience(snake);
    zoo.HireEmployee(veterinarian);
    expect(zoo.employees.length).toBe(1);
});

test("Should not be able to hire employee veterinarian", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    let snake = new Snake();
    zoo.AddAnimal(snake);
    let veterinarian = new Veterinarian();
    expect(() => {
        zoo.HireEmployee(veterinarian);
    }).toThrow("No animal experience");
});

test("Should be able to heal animals", () => {
    let zoo = new Zoo("Mexico");
    zoo.AddEnclosure("Los", 1000);
    let snake = new Snake();
    let snake2 = new Snake();
    let snake3 = new Snake();
    snake.AddFeedSchedule([1]);
    zoo.AddAnimal(snake);
    zoo.AddAnimal(snake2);
    zoo.AddAnimal(snake3);
    let veterinarian = new Veterinarian();
    veterinarian.AddAnimalExperience(snake);
    zoo.HireEmployee(veterinarian);
    zoo.HealAnimals(new Antibiotics());
    expect(zoo.enclosures[0].animals[0].isSick).toBe(false);
    expect(zoo.enclosures[0].animals[1].isSick).toBe(false);
    expect(zoo.enclosures[0].animals[2].isSick).toBe(false);
});
