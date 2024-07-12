
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const app = express();
require('dotenv').config();



const routes = require('./routes/todoroutes');
//const todotasks = require('./models/todotasks');
//app.use('/tasks', todotasks);


//Connecting to mongodb. Connection string is in the dotenv file
const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then((result) => console.log('Connected to database'))
  .catch((err) => console.log('Datbase connection error:', err));


  
//Middlewares
app.set('view engine', 'ejs');
app.use(express.static('public'));  //for static css files enclosed in a folder called public
app.use(bodyParser.urlencoded({ extended: true}));  //
app.use(bodyParser.json());
app.use(methodOverride('_method'));  //to simulate HTTP methods like PUT/DELETE where the client does not support. In regular HTML, GET/POST are the ones actually allowed


//use the routes
app.use('/tasks', routes);
//app.use('/tasks', todotasks);


//Home page route
app.get('/', (req, res) => {
    res.redirect('/tasks'); //rediects to your route after you've added a task
});


//Start server and listen on local host
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

