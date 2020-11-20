const router = require('express').Router();

const { subDays } = require('date-fns');

const WeatherRecord = require('../../models/WeatherRecord');

// ROUTE: /api/node/weather
router.get('/', (req, res) => {
  WeatherRecord.find({ createdAt: { $gte: subDays(new Date(), 7) } })
    .select('-_id -_updatedAt')
    .sort({ createdAt: 1 })
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      console.log('Error getting the last week of weather: ', err);
      res.status(400).send({
        err: true,
        msg: 'Error getting the last week of weather.',
        errorContent: err,
      });
    });
});

router.post('/', (req, res) => {
  try {
    const { temperature, humidity } = req.body;

    if (!temperature && !humidity)
      return res
        .status(400)
        .send('No valid weather parameters found (temp, humidity...)');

    new WeatherRecord({
      temperature: temperature,
      humidity: humidity,
      macAddress: req.get('X-Node-Mac') || null,
    })
      .save()
      .then(() => {
        return res.sendStatus(200);
      })
      .catch(err => {
        return res.status(500).send(err);
      });
  } catch (err) {
    return res.status(400).send(err);
  }
});

module.exports = router;
