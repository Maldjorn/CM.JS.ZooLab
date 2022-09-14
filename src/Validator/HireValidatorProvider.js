const { ZooKeeperValidator } = require("./ZooKeeperValidator.js");
const { VeterinarianValidator } = require("./VeterinarianValidator.js");

module.exports.HireValidatorProvider = class HireValidatorProvider {
    constructor() {}
    ValidateEmployee(employee, zoo) {
        let errors = [];
        if (employee.constructor.name === "ZooKeeper") {
            let validator = new ZooKeeperValidator();
            errors = validator.ValidateEmployee(employee, zoo);
        }
        if (employee.constructor.name === "Veterinarian") {
            let validator = new VeterinarianValidator();
            errors = validator.ValidateEmployee(employee, zoo);
        }
        if (errors.length != 0) {
            console.log("no animal experience");
            return false;
        }
        return true;
    }
};
