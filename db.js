// db.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/football', { useNewUrlParser: true, useUnifiedTopology: true });

const footballSchema = new mongoose.Schema({
  // Define schema based on your CSV fields
});

const FootballModel = mongoose.model('Football', footballSchema);

module.exports = FootballModel;
