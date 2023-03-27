const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/User.js")

const check = require("./middleware/checker");
const user = require("./model/User.js");
const emailV = require("./emailVarification.js");
var jwt = require('jsonwebtoken');
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://siamcit:siamcit@siam-dev.zyltwrw.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

app.post('/reg', async function(req, res){
  let {name,email,pass} = req.body
  let user = new User({
    name:name,
    email:email,
    pass:pass,
    code: 123*Math.random()
  })
  user.save()
  res.send(user)
});


app.listen(8000, function () {
  console.log("port running");
});
