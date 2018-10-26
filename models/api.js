const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApiSchema = new Schema({
  name: {
    type: String
  },
  key: {
    type: String
  }
});

module.exports = Api = mongoose.model('api_keys', ApiSchema);