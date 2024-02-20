let mongoose = require('mongoose')
let model = mongoose.Schema({
    "_id":Number,
    "name":String,
    "maths":Number,
    "physics":Number,
    "chemistry":Number
})
module.exports=mongoose.model('resportal',model)