// let mongoose = require('mongoose');
// const  express = require('express');
// const  router = express.Router();
//
// // Student Model
// let Beer = require('../models/beer');
//
//
//
// // READ
// router.get('/', (req, res) => {
//   Beer.find({}, (error, foundBeer) => {
//       res.json(foundBeer)
//   })
// })
//
//
// // Get
// router.get('/:id', (req, res)=>{
//   Beer.findById(req.params.id, (error, foundBeer)=>{
//     res.json(foundBeer)
//   })
// })
//
// // CREATE
// router.post('/beer-list', (req, res)=>{
//   Beer.create(req.body, (error, createBeer)=>{
//     Beer.find({}, err, foundBeer)
//     res.json(foundBeer)
//   })
// })
//
// router.post('/:id', (req, res)=>{
//   Beer.findByIdAndUpdate(req.params.id, req.body, {new:true}. (err, updatedBeer)=>{
//     if(error){
//       res.send(error)
//     }else{
//       console.log(updatedBeer);
//       res.json(updatedBeer)
//     }
//   })
// })
//
//
// // Delete
// router.delete('/:id', (req, res)=>{
//   Beer.findByIdAndRemove(req.params.id, (err, deleteBeer)=>{
//     Beer.find({}, (err, foundBeer)=>{
//       res.json(foundBeer)
//     })
//   })
// })
//
// module.exports = router;
