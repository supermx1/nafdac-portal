// Show Date
"use strict";
function DateAndTime() {
	var dt = new Date();

	var Hours = dt.getHours();
	var Min = dt.getMinutes();
	var Sec = dt.getSeconds();
	// var MilliSec = dt.getMilliseconds();  + MilliSec + "MilliSec " (for milliseconds).

	//strings
	var days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];

	//strings
	var months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];

	// var localTime = dt.getLocaleTimeString();
	// var localDate = dt.getLocaleDateString();

	if (Min < 10) {
		Min === "0" + Min;
	} //displays two digits even Min less than 10

	if (Sec < 10) {
		Sec === "0" + Sec;
	} //displays two digits even Sec less than 10

	var suffix = "AM"; //cunverting 24Hours to 12Hours with AM & PM suffix
	if (Hours >= 12) {
		suffix = "PM";
		Hours = Hours - 12;
	}
	if (Hours === 0) {
		Hours = 12;
	}

	// document.getElementById("time").innerHTML = localTime;

	document.getElementById("date").innerHTML =
		days[dt.getDay()] +
		", " +
		dt.getDate() +
		" " +
		months[dt.getMonth()] +
		" " +
		dt.getFullYear();
}

new DateAndTime();
setInterval("DateAndTime()", 1000);
