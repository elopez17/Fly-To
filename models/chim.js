const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChimSchema = new Schema({
  name: {
    type: String
  },
  key: {
    type: String
  }
});

module.exports = Chim = mongoose.model('chim_changas', ChimSchema);