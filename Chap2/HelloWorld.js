//Skapa en webb baserad program. 'http' ingårs i Node.
var http = require('http');

//Skapa en server i porten givit av .listen(Port). När något knackar på denna port körs koden i function
http.createServer(function(request,response){
    //path sparar det som kommer efter den sista '/'
    var path = request.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    //Olika case för de olika möjliga '/address' i path
    switch(path){
        case '':
            //Info som besökaren får är endast text
            response.writeHead(200, {'Content-Type': 'text/plain'});
            //texten ingår den följande
            response.end('Hello World');
            break;
        case '/about':
            response.writeHead(200, {'Content-Type':'text/plain'});
            response.end('About world');
            break;
        default:
            response.writeHead(404, {'Content-Type':'text/plain'});
            response.end('404-site not found')
            break;
    }
}).listen(3000);
//För debbugging. Vi kollar att koden öven har körts i DEBUG CONSOLE
console.log('Server started on localhost:3000; press Ctrl-C to terminate....');