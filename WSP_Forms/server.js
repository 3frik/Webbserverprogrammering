var express = require ('express'); 
var app = express(); 

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set ('port', process.env.PORT || 3000);

app.use(require('body-parser').urlencoded({extend:true}));

app.get('/',function(req,res){
    res.render ('home');
});
 
app.get("/form", function(req, res){
    res.render('form');
})

app.post('/process', function(req, res){
    console.log("The users favorite colour is "+ req.body.color);
    userInputs.push(req.body.color);
    console.log(userInputs);
    res.render('form');
})
 
app.get("/form2", function(req, res){
    res.render('form2');
})

app.post('/add', function(req, res){
    var result = Number(req.body.number1) + Number(req.body.number2);
    res.send("<h1>"+result+"</h1>");
})
  
app.listen(app.get('port'), function(){
    console.log('express started on port ' + app.get('port') );
})
