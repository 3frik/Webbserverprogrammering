var http = require('http');
//Vi ska använda en ny library som hanterar routing i en enklare form än ren Javascript
var fs = require('fs');

//Här skapar vi en egen function för att underlätta hantering av de olika path och fel.
function serverStaticFile(res, path, contentType, resCode){
    //om ingen status är förbestämd då jobbar vi med en vanlig webbsida (status 200)
    if(!resCode) resCode=200;
    fs.readFile(__dirname + path, function(err,data){
        //om något gick fel, då skickar vi en status 500 (fel i servern)
        if(err){
            res.writeHead(500, {'Content-Type':'text/plain'});
            res.end('500 - internal error')
        //annars har vi en webbsida eller resurs att hantera
        } else {
            res.writeHead(responseCode, {'Content-Type':contentType});
            res.end(data)
        }
    })
}

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path){
        case '':
            //Här använder vi vår program. Allt ingårs i en endast linje av kod.
            serverStaticFile(res, '/public/home.html', 'text/html');
            break;
        case '/about':
            serverStaticFile(res, '/public/about.html', 'text/html');
            break;
        case '/img/logo.png' :
            serverStaticFile(res, '/public/img/logo.png', image/png);
            break;
        default:
            serverStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl+C to stahp.')