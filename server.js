const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
let dbConfig = require('./database/db')
// const PORT = 4000;

const beerRoute = require('../beerapp-backend/routes/beer.route')

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(()=>{
  console.log('Database connected!');
},
  error => {
    console.log('Could not connect to database ' + error);
  }
)

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/beers', beerRoute)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port);
})

app.use((req, res, next)=>{
  next(createError(404));
});

app.use(function(err, req, res, next){
  console.error(err, message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})
