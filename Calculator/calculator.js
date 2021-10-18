const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extend:true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/",function(req, res){
    console.log(req.body);
    var num1 = N    umber(req.body.numberA);
    var num2 = Number(req.body.numberB);
    var result= num1+num2;
    res.send("The rsulting number is: " + result);
})

app.listen (3000, function(){
    console.log("Server started on port 3000.");
})