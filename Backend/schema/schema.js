const mongoose = require('mongoose');


// Define the schema
const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  insight: String,
  source: {
    type: String,
    required: true,
  },
  url: String,
  country: String,
  region: String,
  sector: String,
  topic: String,
  pestle: String,
  intensity: Number,
  relevance: Number,
  likelihood: Number,
  added: Date,
  published: Date,
});

// Use the blackcoffer database
const userDb = mongoose.connection.useDb('blackcoffer');

// Create the model
const DataModel = userDb.model('Shreeti', dataSchema);

module.exports = DataModel;
