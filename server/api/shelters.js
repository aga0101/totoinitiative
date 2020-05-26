const router = require('express').Router();
const Shelter = require('../db/models/shelters');
// const Pet = require('../db/models/pets');

router.get('/', async function(req, res, next) {
 try {
  const allShelters = await Shelter.findAll();
  res.json(allShelters);
 } catch (error) {
  next(error);
 }
});

module.exports = router;