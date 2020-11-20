const router = require('express').Router();

router.post('/', (req, res) => {
  const { timesNothingChanged, battery, voltage } = req.body;
});

module.exports = router;
