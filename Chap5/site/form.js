//Den här gör att vi använder Express
var express = require ('express'); 
//variabeln app syftar till Express
var app = express(); 
//var handlebars syftar till hantering av hendlebars.
//main är layouten som handlebars använder.
var handlebars = require('express-handlebars').create({
    defaultLayout:'main'
}); 
var path = require ('path');

//Express kommer att jobba med vår handlebars
app.engine('handlebars', handlebars.engine);
app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'handlebars');

app.set ('port', process.env.PORT || 3000);

app.use(require('body-parser').urlencoded({extend: true}));
 
//app.get hanterar adressen
app.get('/',function(req,res){
    //Vad layouten ska fyllas med i {{{body}}}
    res.render ('home');
});

app.get('/form', function(req,res){
    res.render('form');
});

//Svar efter man fyller formen
app.post('/process', function (req,res){
    //En ny function från body-parser: req.body
    //I formen som vi hanterar finns "name='color". Färgen sparas där, och vi kan visa det genom req.body.color
    console.log('The favorite color is: '+req.body.color);
    // .redirect används efter en Form har hanterats.
    res.redirect(303, '/about');
})

app.get('/about', function(req,res){
    res.render('about');
});
 
//.use i stället för -get för att hantera konstiga fall
app.use (function(req,res){
    //om inget sägs fyller express status som 200 (ok), men en 404 är en annan status, så man ska visa det
    res.status (404);
    res.render('404');
});
 
//en 505 status är en error status. Vi vill inte ha errors, så vi vill fixa det.
app.use(function(err,req,res,next){
    //få info om vad som har hänt
    console.error (err.stack);
    res.status(500);
    res.render('500');
});
 
app.listen(app.get('port'), function(){
    console.log('express started on http//localhost:' + app.get('port') + '; press Ctrl+C to terminate')
})
 