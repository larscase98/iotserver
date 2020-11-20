const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    temperature: Number, // Celcius
    humidity: Number, // % relative
    macAddress: String, // the MAC address of the chip sending the sensor readings
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WeatherRecord', schema);
