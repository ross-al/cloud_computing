const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const filmSchema = new Schema({
    film_name:{
        type:String
    },
    film_type:{
        type:String
    },
    film_year:{
        type:String
    },
    film_link:{
        type:String
    }
})

module.exports = mongoose.model('Film',filmSchema); 
//mongoose by default looks for lower case plural collections of Schema
//e.g. if Film, then will look for collection called 'films'

