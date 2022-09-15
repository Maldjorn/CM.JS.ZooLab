const { Antibiotics } = require("../src/Medicine/Antibiotics");
const { Antiflammatory } = require("../src/Medicine/Antiflammatory");
const { AntiDepression } = require("../src/Medicine/AntiDepression");
const { Medicine } = require("../src/Medicine/Medicine");

test("Should not be able to create Medicine object", () => {
    expect(() => {
        let medicine = new Medicine();
    }).toThrow("Abstract classes can't be instantiated.");
});

test("Should be able to create Antibiotics object", () => {
    let antibiotics = new Antibiotics();
    expect(antibiotics).toBeInstanceOf(Antibiotics);
});

test("Should be able to create Antiflammatory object", () => {
    let antiflammatory = new Antiflammatory();
    expect(antiflammatory).toBeInstanceOf(Antiflammatory);
});
