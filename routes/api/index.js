const router = require("express").Router();

router.use("/", (req, res, next) => {
  console.log("API endpoint request received.");

  next();
});

router.get("/", (req, res) => {
  res.send(new Date());
});

module.exports = router;
