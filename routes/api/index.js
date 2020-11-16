const router = require("express").Router();

const keys = require("../../config/keys");
const WeatherRecord = require("./../../models/WeatherRecord");

router.use("/", (req, res, next) => {
  console.log("API endpoint request received.");

  const token = req.get("X-Token");

  if (!token || token !== keys.apiToken) {
    console.log("Bad token (X-Token header)");
    return res.status(400).send("Bad token (X-Token header)");
  }

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

    new WeatherRecord({
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
