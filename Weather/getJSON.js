//Vi använder Express, så vi Require den efter att ha laddat ner biblioteket
//dvs, npm install express i mappen med uppgiften
const express= require("express");
const app = express();
//Vi använder också biblioteket https för att besöka adresser automatiskt (utan att skriva adressen manuellt)
//Den finns inbyggt i Node, så det behöver vi inte ladda ner (typ som MATH, ungefär)
const https = require("https");

//Det man gör och svarar till när någon besöker vår "webbsida"
app.get("/", function(req, res) {
    //Vi ska använda denna långa adressen för att hämta in information från en API
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=0892fa23e98bc022dbc2ea43ce626e28#";
    
    //Innan vi skickar en response samlar vi in information från en extern API
    https.get(url, function(response){
        //Vi bearbetar med "data" från det som API skickar oss
        response.on("data", function(data){
            console.log(data);
            res.send("Look at the terminal.")
        })
    })
})

app.listen(3000, function(){
    console.log("Server started in port 3000");
})