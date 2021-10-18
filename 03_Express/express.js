var express = require ("express");
var http = require(http);
var app = express();

var handlebars = require ('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars' , handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);

app.get('/', function (request, response){
    response.render('home');
})

app.get('/about', function(req, res){
    res.render('about');
})

app.get('/contact', function(req, res){
    res.render('contact');
})

app.get('/another', function(req, res){
    res.render('another');
})

app.get('/page', function(req, res){
 //   res.send(http.render('_dirmane/html/pagepage.html'));
})

app.use(function(req,res){
    res.status(404);
    res.render('404');
})

app.use(function(err,req,res, next){
    console.log(err.stack);
    res.status(500);
    res.render('500');
})

app.listen(app.get('port'), function(){
    console.log ('Express server started on port ' + app.get('port'));
})