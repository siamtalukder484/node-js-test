const express = require("express")
const app = express()
const mongoose = require("mongoose");

const check = require("./middleware/checker")
app.use(express.json())


mongoose.connect('mongodb+srv://siamcitbd:siamcitbd@siam-dev.zyltwrw.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => console.log('Connected!'));


app.get("/",check,function(req,res){
    let user = [
        {
            name:"siam",
        },
        {
            name:"siam2",
        },
        {
            name:"siam3",
        },
        {
            name:"siam4",
        }
    ]
    res.json(user)
})

app.post("/reg",(req,res)=>{
    let {name, email} = req.body
    if(name == ""){
        return res.json({error: "Name is required"})
    }else{
        res.json({success: "Form is validate"})
    }
    console.log(req.body)
})

app.listen(8000,function(){
    console.log("port running");
})