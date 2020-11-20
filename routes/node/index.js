const router = require('express').Router();

const keys = require('../../config/keys');

router.use('/', (req, res, next) => {
  const token = req.get('X-Token');

  if (!token || token !== keys.apiToken) {
    console.log('/api (bad or no token)');
    return res.status(400).send('Bad token (X-Token header)');
  } else {
    console.log('/api (good token)');
  }

  next();
});

router.use('/weather', require('./weather'));

router.use('/vitals', require('./vitals'));

module.exports = router;
