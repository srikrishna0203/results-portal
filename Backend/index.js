let express = require('express')
let mongoose = require('mongoose')
let server = express()
let cors = require('cors')
let route = require('./Routes/routes')
server.use(express.json())
server.use(cors())
mongoose.connect("mongodb://localhost:27017/studentsdb").then(()=>{
    console.log("data base connected");
})
server.use('/',route)
server.listen(3000)