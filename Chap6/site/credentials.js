//'super secret string' är en hemlig kod som servern använder. 
//Man kan inte komma till den utan tillåtelse att använda credentials.js
//och även då måste man leta efter den korrekta koden, för här går det att spara olika koder
//För att hitta den rätta får program använda en cookieSecret, som är referensnamnet
//Referensnamn för 'super secret string' är secretKey
module.exports={secretKey: 'super secret string'};