let express = require('express')
let {getdata,getbyid,storedata} = require('../Controller/controller')
let route = new express.Router()
route.get('/',getdata)
route.get('/result/:hno',getbyid)
route.post('/store',storedata)
module.exports = route;