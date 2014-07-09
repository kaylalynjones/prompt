var prompt = require('sync-prompt').prompt;
var first = prompt('What is your first name? ');
var last = prompt('What is your last name? ');
var full = first + " " + last;
console.log('Your name is ', full);

var color = prompt('what is your favorite color? ');
console.log('your favorite color is ' + color + '.');

//Dogs age in human years
//


var age =  prompt("what is your dog's age? ");
console.log(typeof age);
age = parseInt(age);
console.log(typeof age);

var humanYears = age * 7;
console.log("Your dog is " + age + " years old");
console.log("That is " + humanYears +  " human years!");


// Alcohol
//
var yourAge = prompt('What is your age?');

yourAge = parseInt(yourAge);
if( yourAge >= 21) {
  console.log('You can drink!');
} else {
  console.log('No party for you!');
}



//celcius to fahrenheit, vice versa
//

var m = prompt(' Are you using Fahrenheit or Celsius? (F/C) ');
var t = prompt(' What temperature are you interested in? ');

t = parseInt(t);
var response;

if( m === "C"){
response = t * 9/5 + 32;
console.log('That is ' + response + ' in Fahrenheit.');
} else {
response = (t - 32) * 5/9;
console.log( t + m + ' is ' + response + ' in Celcius.');
}



//bmi calc
//

var ht = prompt('How tall are you? (inches)');
var wt = prompt('How much do you weigh? (pounds)');

ht = parseInt(ht);
wt = parseInt (wt);

var a = (wt * 703);
var b = Math.pow(ht, 2);
var calc = a / b;
console.log('Based on your input, your BMI is ', calc.toFixed(1));





