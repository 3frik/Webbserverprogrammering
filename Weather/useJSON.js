//Vi använder Express, så vi Require den efter att ha laddat ner biblioteket
//dvs, npm install express i mappen med uppgiften
const express= require("express");
const app = express();
//Vi använder också biblioteket https för att besöka adresser automatiskt (utan att skriva adressen manuellt)
//Den finns inbyggt i Node, så det behöver vi inte ladda ner (typ som MATH)
const https = require("https");

//Det man gör och svarar till när någon besöker vår "webbsida"
app.get("/", function(req, res) {
    //Vi ska använda denna långa adressen för att hämta in information från en API
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=0892fa23e98bc022dbc2ea43ce626e28#";
    
    //Innan vi skickar en response samlar vi in information från en extern API
    https.get(url, function(response){
        //Vi bearbetar med "data" från det som API skickar oss
        response.on("data", function(data){
            //Information i "data" spara i olika variabler som vi kommer att använda
            const weatherData = JSON.parse(data); //Hela JSON svar
            const name = weatherData.name; //Namn på staden
            const temperature = weatherData.main.temp; //Temperatur i staden
            const weatherDescription = weatherData.weather[0].description;
            console.log("Temperature in "+weatherData.name + " is " + temperature);
            //Vi skapar html som vi ska skicka tillbaka med res.write
            res.write("<h1>Thank you for using our services. Your request has been ansswered</h1>");
            res.write("<h1>Temperature in "+weatherData.name + " is " + temperature + ".</h1>");
            res.write("<h1>The weather is "+ weatherDescription+".</h1>");
            //När html är redå skickar vi det via res.send
            res.send();
        })
    })
})

//Här startar vi servern
app.listen(3000, function(){
    console.log("Server started in port 3000");
})