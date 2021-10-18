const express =require("express");
const app = express();

app.get("/", function(request, respons){
    //console.log(request);
    respons.send("<a href='www.google.com'>click me</a>");
})

app.get("/about", function (req, res){
    res.send("<h1>This is an about page.</h1>")
})

app.get("/topsecret", function(req,res){
    res.send("<div>WELCOME,</div><h1>human, to my <a href='www.google.com'>lair</a></h1>")
})

app.get("/contact", function (req, res){
    res.send("Me, myself and I... and my conseuqneces, can be found at asmdfmlhjsCF@GMAIL.COM")
})

app.listen(3000, function() {
    console.log("Server started on port 3000.");
});
