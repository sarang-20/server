const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const RegistrationModel = require('./models/Register');
const { urlencoded } = require('express');
const router = express.Router();
const register=require('./routes/register');
//const login = require('./routes/login');





app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://sarangaghara083:Sarang20%40@form.jmrepwy.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });


 app.use('/', register);
 //app.use('/login', login)



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("heloo")

});

