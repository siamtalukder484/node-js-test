const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("./model/user.js")

const check = require("./middleware/checker");
const user = require("./model/user.js");
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://siamcit:siamcit@siam-dev.zyltwrw.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected!"));

// app.get("/", check, function (req, res) {
//   let user = [
//     {
//       name: "siam",
//     },
//     {
//       name: "siam2",
//     },
//     {
//       name: "siam3",
//     },
//     {
//       name: "siam4",
//     },
//   ];
//   res.json(user);
// });

app.post('/registration', (req, res) => {
  let {name,email,pass} = req.body
  let user = new User({
    name:name,
    email:email,
    pass:pass
  })
  user.save()
  res.send(user)
});

app.listen(8000, function () {
  console.log("port running");
});
