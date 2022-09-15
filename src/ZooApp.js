const { Zoo } = require("./Zoo/Zoo.js");
const { Enclosure } = require("./Zoo/Enclosure.js");
const { Parrot } = require("./Animals/Birds/Parrot.js");
const { ZooKeeper } = require("./Employees/ZooKeeper.js");
const { Turtle } = require("./Animals/Reptiles/Turtle.js");
const { Veterinarian } = require("./Employees/Veterinarian.js");

const { Antibiotics } = require("./Medicine/Antibiotics.js");
const zoo = new Zoo("Mexico");

zoo.AddEnclosure("South", 10000);

var parrot = new Parrot();
parrot.AddFeedSchedule([1, 2, 3]);
var turtle = new Turtle();
turtle.AddFeedSchedule([1, 2]);
var enclosure = zoo.FindAvailableEnclosure(parrot);
enclosure.AddAnimal(parrot);
var enclosure = zoo.FindAvailableEnclosure(turtle);
enclosure.AddAnimal(turtle);
var zooKeeper = new ZooKeeper("Alex", "Mercer");
var veterinarian = new Veterinarian("Max", "Javist");
zooKeeper.AddAnimalExperience(parrot);
zooKeeper.AddAnimalExperience(turtle);
veterinarian.AddAnimalExperience(parrot);
veterinarian.AddAnimalExperience(turtle);
zoo.HireEmployee(zooKeeper);

zoo.HireEmployee(veterinarian);
zoo.FeedAnimals();
zoo.HealAnimals(new Antibiotics());
