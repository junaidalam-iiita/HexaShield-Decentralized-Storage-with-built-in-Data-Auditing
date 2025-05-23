const mongoose = require('mongoose');

const localStorageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ipAddress: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model('LocalStorage', localStorageSchema);
