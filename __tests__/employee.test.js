const { Employee } = require("../src/Employees/Employee");

test("Should not be able to create Employee object", () => {
    expect(() => {
        let food = new Employee();
    }).toThrow("Abstract classes can't be instantiated.");
});
