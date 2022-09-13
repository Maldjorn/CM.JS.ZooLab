const { Zoo } = require("./Zoo/Zoo.js");
const { Enclosure } = require("./Zoo/Enclosure.js");
const { Parrot } = require("./Animals/Birds/Parrot.js");

const zoo = new Zoo("Mexico");

zoo.AddEnclosure("South", 1000);

const parrot = new Parrot();
var enclosure = zoo.FindAvailableEnclosure(parrot);
enclosure.AddAnimal(parrot);
