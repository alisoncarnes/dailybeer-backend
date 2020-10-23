const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

const Beer = require('./models/beer.js')
const beer = express.Router();


app.use(cors());
app.use(bodyParser.json());
app.use('/beers', beer);

mongoose.connect('mongodb://127.0.0.1:27017/beerapp', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//GET

beer.get('/', (req,res)=>{
  Beer.find({}, (err, foundBeer)=>{
    res.json(foundBeer)
  })
})

//find

beer.get('/:id', (req, res)=>{
  let id = req.params.id;
  Beer.findById(id, function(err, foundBeer){
    res.json(foundBeer);
  })
})

//post
beer.post('/add', (req, res)=>{
  Beer.create(req.body, (err, createdBeer)=>{
    Beer.find({}, (err, foundBeer)=>{
      res.json(foundBeer)
    })
  })
})

//update
beer.put('/:id', (req, res)=>{
  Beer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedBeer) => {
      if (err) {
        res.send(err)
      }else{
        Beer.find({}, (err, foundBeer)=>{
          res.json(foundBeer)
        })
      }
    }
  )
})

//delete

beer.delete('/:id', (req, res)=>{
  Beer.findByIdAndRemove(req.params.id, (err, deletedBeer)=>{
    Beer.find({}, (err, foundBeer)=>{
      res.json(foundBeer)
    })
  })
})



app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
