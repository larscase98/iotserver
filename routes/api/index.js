const router = require("express").Router();

const keys = require("../../config/keys");

router.use("/", (req, res, next) => {
  const token = req.get("X-Token");

  if (!token || token !== keys.apiToken) {
    console.log("/api (bad or no token)");
    return res.status(400).send("Bad token (X-Token header)");
  } else {
    console.log("/api (good token)");
  }

  next();
});

router.get("/", (req, res) => {
  res.send(new Date());
});

router.use("/weather", require("./weather"));

// doesn't work
router.post("/vitals", (req, res) => {
  const { voltage } = req.body;

  console.log(`${voltage} Vin`);
});

module.exports = router;
