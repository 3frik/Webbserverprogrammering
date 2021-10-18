var superComputer = { 
    number1 : 7 ,
    timesNumber: function (argumentNumber) {			//
		return argumentNumber * this.number1;
	}    
}

var number1 = 8;

console.log ( superComputer.timesNumber(5) );