let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let beerSchema = require('../models/beer');

// CREATE
router.route('/create-beer').post((req, res, next) => {
  beerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ
router.route('/').get((req, res) => {
  beerSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get
router.route('/edit-beer/:id').get((req, res) => {
  beerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update
router.route('/update-beer/:id').put((req, res, next) => {
  beerSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Beer updated successfully !')
    }
  })
})

// Delete
router.route('/delete-beer/:id').delete((req, res, next) => {
  beerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
