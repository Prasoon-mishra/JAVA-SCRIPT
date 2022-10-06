//Usecase 1 - generate a random number
console.log("***************************************");
var randomValue =Math.floor(Math.random()*10);
console.log("Random number between 0 and 10 is :"+randomValue);
console.log("***************************************")
//Usecase 2 - Generate a random number for dice
var diceValue =Math.floor(Math.random()*6)+1;
console.log("Random number between 1 and 6 for dice is :"+diceValue);
console.log("***************************************");
//Usecase 3 - Add two random dice numbers
var diceValue2 = Math.floor(Math.random()*6)+1;
console.log("Random second number between 1 and 6 for dice is :"+diceValue2);
var result = diceValue+diceValue2;
console.log("The added dice numbers is :"+result);
console.log("***************************************");