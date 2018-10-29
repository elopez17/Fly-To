const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  IataCode: {
    type: String,
    required: true
  },
  Location: {
    type: String,
    required: true
  }
});

module.exports = Geo = mongoose.model('geos', GeoSchema);
