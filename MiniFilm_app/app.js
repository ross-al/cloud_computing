// const express = require('express')
// const app = express()
const express = require('express')
const app = express()

const mongoose = require('mongoose')

const filmsRoute = require('./routes/films')

app.use('/films',filmsRoute)

app.get('/', (req,res)=>{
    res.send('Homepage')
})

//to hide passwords
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Your mongoDB connector is on...')
})

app.listen(3000, ()=>{
    console.log('Your server is up and running...')
})