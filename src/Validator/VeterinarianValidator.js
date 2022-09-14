module.exports.VeterinarianValidator = class VeternarianValidator {
    constructor() {}
    ValidateEmployee(employee, zoo) {
        let errors = [];
        let animalsList = [];
        for (let i = 0; i < zoo.enclosures.length; i++) {
            for (let j = 0; j < zoo.enclosures[i].animals.length; j++) {
                animalsList.push(zoo.enclosures[i].animals[j]);
            }
        }
        for (let i = 0; i < animalsList.length; i++) {
            if (!employee.HasAnimalExperience(animalsList[i])) {
                errors.push("No animal Experience");
            }
        }
        return errors;
    }
};
