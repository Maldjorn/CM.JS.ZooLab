const { Food } = require("../src/FoodTypes/Food");
const { Grass } = require("../src/FoodTypes/Grass");
const { Meat } = require("../src/FoodTypes/Meat");
const { Vegetable } = require("../src/FoodTypes/Vegetable");

test("Should not be able to create Food object", () => {
    expect(() => {
        let food = new Food();
    }).toThrow("Abstract classes can't be instantiated.");
});

test("Should be able to create Meat object", () => {
    let meat = new Meat();
    expect(meat).toBeInstanceOf(Meat);
});

test("Should be able to create Grass object", () => {
    let grass = new Grass();
    expect(grass).toBeInstanceOf(Grass);
});

test("Should be able to create Vegetable object", () => {
    let vegetable = new Vegetable();
    expect(vegetable).toBeInstanceOf(Vegetable);
});
