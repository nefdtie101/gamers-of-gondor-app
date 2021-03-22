// This is the main app.js
const express = require('express')
const app = express()
const helmet = require("helmet");
const nodemailer = require('nodemailer')
app.use(helmet());
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//connect to db
const dbUrl= // Place your mongo db link here
mongoose.connect(dbUrl,{useNewUrlPaser:true, useUnifiedTopology:true,useFindAndModify:false})
    .then((result)=> console.log('I am connected to mongo db'))

// this is the routes
require('./routes/verify')(app)
require('./routes/addUser')(app)
require('./routes/getUsername')(app)
require('./routes/login')(app)
require('./routes/homeInofo')(app)
require('./routes/code')(app)
require('./routes/updateinfo')(app)
require('./routes/addEvent')(app)
require('./routes/getEvents')(app)
require('./routes/deleteEvent')(app)
//All of this is for testing
require('./routes/test.username')(app)


//This is main app
app.listen(3001,function (){
    console.log('I am awake master')
})


