'use strict'

const router = require('express').Router();
const pets = require('./pets');
const shelters = require('./shelters');

router.use('/pets', pets);
router.use('/shelters', shelters);

router.use((req, res, next) => {
 const err = new Error('API route not found!')
 err.status = 404
 next(err)
})

module.exports = router;
