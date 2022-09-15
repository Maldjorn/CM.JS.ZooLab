const { Animal } = require("../src/Animals/Animal.js");

test("Should not be able to create Animal", () => {
    expect(() => {
        let animal = new Animal();
    }).toThrow("Abstract classes can't be instantiated.");
});
