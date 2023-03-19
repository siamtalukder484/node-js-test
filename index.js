const express = require("express")
const app = express()

const check = require("./middleware/checker")
app.use(express.json())


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