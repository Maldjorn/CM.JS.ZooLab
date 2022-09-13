const { Zoo } = require("./Zoo/Zoo.js");
const { Enclosure } = require("./Zoo/Enclosure.js");
const { Parrot } = require("./Animals/Birds/Parrot.js");
const { ZooKeeper } = require("./Employees/ZooKeeper.js");
const { Grass } = require("./FoodTypes/Grass.js");

const zoo = new Zoo("Mexico");

zoo.AddEnclosure("South", 1000);

var parrot = new Parrot();
parrot.AddFeedSchedule([1, 2, 3]);
var enclosure = zoo.FindAvailableEnclosure(parrot);
enclosure.AddAnimal(parrot);
var zooKeeper = new ZooKeeper("Alex", "Mercer");
zooKeeper.AddAnimalExperience(parrot);
zoo.HireEmployee(zooKeeper);
zoo.FeedAnimals(new Grass());
