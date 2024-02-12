const mongoose = require('mongoose');
const DB = 'mongodb+srv://sarangaghara083:Sarang20%40@form.jmrepwy.mongodb.net/'; 

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connection successfully established to the database');
}).catch((err) => {
  console.error('Could not connect to the database:', err);
});
