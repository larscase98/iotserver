const router = require("express").Router();

const WeatherRecord = require("./../../models/WeatherRecord");

router.use("/", (req, res, next) => {
  console.log("API endpoint request received.");
  next();
});

router.get("/", (req, res) => {
  res.send(new Date());
});

router.post("/sensordata", (req, res) => {
  try {
    const { temp, humidity } = req.body;

    if (!temp && !humidity)
      return res
        .status(400)
        .send("No valid weather parameters found (temp, humidity...)");

    const wr = new WeatherRecord({
      temperature: temp,
      humidity: humidity,
    })
      .save()
      .then(() => {
        return res.sendStatus(200);
      })
      .catch((err) => {
        return res.status(500).send(err);
      });
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
