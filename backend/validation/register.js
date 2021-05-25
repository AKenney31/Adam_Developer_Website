import Validator from "validator";
import isEmpty from "is-empty";

function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    else if(Validator.contains(" ")){
        errors.name = "Username must be one word";
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    else if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }

    return {
        //returns errors and a boolean to easily check if there was an error present
        errors, isValid: isEmpty(errors)
    };
};

export default(validateRegisterInput);