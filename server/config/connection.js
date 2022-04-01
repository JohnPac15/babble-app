const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/babble-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  // Having these on the server will make it crash
  // useCreateIndex: true,
  // useFindAndModify: false
});

module.exports = mongoose.connection;
