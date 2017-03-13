function date(){

var secondHands = document.getElementById('second-hand');
var minHands = document.getElementById('min-hand');
var hourHands = document.getElementById('hour-hand');

//TODO: Fix the calc of the hours

var currentDate = new Date();

var seconds = currentDate.getSeconds();
var secondsDegrees = ((seconds/60)*360) + 190;
secondHands.style.transform = `rotate(${secondsDegrees}deg)`;

var minuts = currentDate.getMinutes();
var minDegrees = ((minuts/ 60)*360) + 90;
minHands.style.transform = `rotate(${minDegrees}deg)`;

var hours = currentDate.getHours();
var hourDegrees = ((hours/ 60)*360) + 190;
hourHands.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(date, 1000);