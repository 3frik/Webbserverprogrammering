const express= require("express");
const app = express();
const https = require("https");

//Vi lägger till body-parse, för att hantera posts
const bodyParser = require("body-parser");
//Vilket vi startar såhär
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/weatherForm.html")
})

app.post("/", function(req, res) {
    //Nu ska vi skapa adressen som vi tar informationen ifrån från informationen som användaren ger oss
    const city= req.body.cityName;
    const APIkey="0892fa23e98bc022dbc2ea43ce626e28";
    const units="metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units="+units+"&appid="+APIkey+"#";
    
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data); //Hela JSON svar
            const name = weatherData.name; //Namn på staden
            const temperature = weatherData.main.temp; //Temperatur i staden
            const weatherDescription = weatherData.weather[0].description;
            console.log("Temperature in "+weatherData.name + " is " + temperature + "C.");
            res.write("<h1>Thank you for using our services. Your request has been answered</h1>");
            res.write("<h1>Temperature in "+weatherData.name + " is " + temperature + ".</h1>");
            res.write("<h1>The weather is "+ weatherDescription+".</h1>");
            res.send();
        })
    })
})

//Här startar vi servern
app.listen(3000, function(){
    console.log("Server started in port 3000");
})