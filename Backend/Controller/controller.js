let resportal = require('../Model/usermodel')
let getdata = (req,res)=>{
    resportal.find().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({"err":err})
    })
}
let getbyid = (req,res)=>{
    resportal.findById({"_id":req.params.hno}).then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json(err)
    })
}
let storedata = (req,res)=>{
    let data = new resportal(req.body)
    data.save().then(()=>res.json({"msg":"stores"}))
}
module.exports = {getdata,getbyid,storedata}