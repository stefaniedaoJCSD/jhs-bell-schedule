// Getting the time and date right now
let now = new Date();

// Getting the hour in number format
let hour = now.getHours();

// Setting AM or PM and converting hour to 12-hour format
let AMPM = "AM";
	if (hour > 12) {
		hour = hour - 12;
		AMPM = "PM";
		}
	else {
		AMPM = "AM";
		}

// Converting hour to a string
let hourString = hour.toString();

// Getting the minute in number format			
let minute = now.getMinutes();

// Converting minute to a string and adding a leading 0 if needed
let minuteString = minute.toString();
	if (minute < 10) {
		minuteString = "0" + minute.toString();
		}
	else {
		minuteString = minute.toString();
		}

// Setting the time string
let time = hourString + ":" + minuteString;
			
document.getElementById("currentTime").innerHTML = "The time is: " + time + " " + AMPM;
			
// Getting the day of the week
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var weekday = weekdays[now.getDay()];

// Getting the month
const months = ["January","February","March","April","May","June","July","August","September",
	"October","November","December"];
var month = months[now.getMonth()];
			
document.getElementById("currentDay").innerHTML = "Today is: " + weekday + ", "
	+ month + " " + now.getDate() + ", " + now.getFullYear()

// Get the holiday schedule
let holiday = false;
	if (now.getFullYear() == 2021) {
		if (month == "November") {
			if (now.getDate() == [24 || 25 || 26]) {
				holiday = true;
				}
			}
		else if (month == "December") {
			if (now.getDate() == [23 || 24 || 27 || 28 || 29 || 30 || 31]) {
				holiday = true;
				}
			}
		}
	else if (now.getFullYear() == 2022) {
		if (month == "January") {
			if (now.getDate() == [17]) {
				holiday = true;
				}
			}
		else if (month == "February") {
			if (now.getDate() == [14]) {
				holiday = true;
				}
			}
		else if (month == "March") {
			if (now.getDate() == [11 || 14 || 15 || 16 || 17 || 18]) {
				holiday = true;
				}
			}
		else if (month == "April") {
			if (now.getDate() == [22]) {
				holiday = true;
				}
			}
		else if (month == "May") {
			if (now.getDate() == [30]) {
				holiday = true;
				}
			}
		else {
			holiday = false;
			}
		}