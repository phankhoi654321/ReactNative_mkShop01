const validation = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = { };

  // this isEmpty is what me create, so check data.name is empty with what we create or not, if not return the data.name, if empty return the string to use for isEmpty from validation
   
  data.email = !isEmpty(data.email) ? data.email : "";     
  data.password = !isEmpty(data.password) ? data.password : "";     

  

  if(!validation.isEmail(data.email)) {      
    errors.email = "Email is invalid";
  }

  if(validation.isEmpty(data.email)) {       //this is isEmpty from validation not from what me create
    errors.email = "Email field is required";
  }

  if(validation.isEmpty(data.password)) {       //this is isEmpty from validation not from what me create
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
