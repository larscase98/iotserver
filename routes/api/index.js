const router = require("express").Router();

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

    if (temp) console.log(`Temperature: ${temp} C`);
    if (humidity) console.log(`Humidity: ${humidity}%`);

    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
