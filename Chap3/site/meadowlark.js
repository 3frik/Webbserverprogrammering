var express = require ('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set ('port', process.env.PORT || 3000);

var fortunes = [
    "result 1", "result 2", "and another", "and yet another one", "and the last one",
]

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
    res.render ('home');
});

app.get('/about', function(req,res){
    var yourResult = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('about', {fortune:yourResult});
});

//custom 404 page
app.use (function(req,res){
    res.status (404);
    res.render('404');
});

//custom 505
app.use(function(err,req,res,next){
    console.error (err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('express started on http//localhost:' + app.get('port') + '; press Ctrl+C to terminate')
})

