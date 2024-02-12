const mongoose = require("mongoose");

const RegistrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String, 
    
  },
  hobbies: {
    type: [String], 
    default: [],
  },
  fileUpload: {
    type: String, 
    required: false, 
  },
});

const RegistrationModel = mongoose.model('registers', RegistrationSchema);

module.exports = RegistrationModel;