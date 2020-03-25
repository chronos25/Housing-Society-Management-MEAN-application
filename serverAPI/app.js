const express = require('express'),
 path = require('path'),
 bodyparser = require('body-parser'),
 logger = require('morgan');
 cors= require('cors'),
 memberRoutes = require('./routes/memberRoutes'),
 usersRouter = require('./routes/users'),
 url = 'mongodb://localhost:27017/society',
 mongoose = require('mongoose');

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));


const options = {
    useNewUrlParser : true,
    useUnifiedTopology: true
  }
  
  const connect = mongoose.connect(url,options,(err,client)=>{   
    console.log("Connected Sucessfully to DB");
    
  });

app.use('/society', memberRoutes);
app.use('/users', usersRouter);

module.exports = app;
