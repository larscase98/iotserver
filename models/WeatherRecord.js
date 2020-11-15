const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    temperature: Number, // Celcius
    humidity: Number, // % relative
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("WeatherRecord", schema);
