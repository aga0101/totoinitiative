const router = require('express').Router();
const Pet = require('../db/models/pets');
// const Shelter = require('../db/models/shelters');

router.get('/', async function(req, res, next) {
 try {
  let allPets = await Pet.findAll();
  res.send(allPets);
 } catch (error) {
  next(error);
 }
});

module.exports = router;