module.exports.Employee = class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        if (this.constructor === Employee) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
};
