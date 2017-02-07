//
//Declare global vars here
var firstName;
var birthDayObj;

var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


function calZodiac() {
	var outputArea = document.getElementById ('displayMsg');
	// 
	//outputArea.innerHTML = 'calZodiac called';

	firstName = document.getElementById('fname').value;
	//outputArea.innerHTML = 'Hello ' + firstName;

	birthDayObj = new Date(document.getElementById ('bday').value);

	var whichDayNdx = birthDayObj.getDay();

	//
	// Calculate zodiac sign

	var monthNum = birthDayObj.getMonth();
	var dayNum = birthDayObj.getDate();

	//
	// Normalize day and month for readability
	monthNum ++;
	dayNum ++;

	var astroSign;

	if ((monthNum == 12  && dayNum >= 22) || (monthNum == 1 && dayNum <= 19)) {
		astroSign = 'Capricorn';
	} 
	else if ((monthNum == 11 && dayNum >= 22) || (monthNum ==12 && dayNum <= 21 )) {
		astroSign = 'Sagittarius';
	}
	else if ((monthNum == 10 && dayNum >= 24) || (monthNum == 11 && dayNum <= 21 )){
		astroSign = 'Scorpio';
	}
	else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23 )){
		astroSign = 'Libra';
	}
	else if ((monthNum == 9 && dayNum >= 23) || (monthNum == 10 && dayNum <= 23 )){
		astroSign = 'Libra';
	}
	else if ((monthNum == 8 && dayNum >= 23) || (monthNum == 9 && dayNum <= 22 )){
		astroSign = 'Virgo';
	}
	else if ((monthNum == 7 && dayNum >= 23) || (monthNum == 8 && dayNum <= 22 )){
		astroSign = 'Leo';
	}
	else if ((monthNum == 6 && dayNum >= 22) || (monthNum == 7 && dayNum <= 22 )){
		astroSign = 'Cancer';
	}
	else if ((monthNum == 5 && dayNum >= 21) || (monthNum == 6 && dayNum <= 21 )){
		astroSign = 'Gemini';
	}
	else if ((monthNum == 4 && dayNum >= 20) || (monthNum == 5 && dayNum <= 20 )){
		astroSign = 'Taurus';
	}
	else if ((monthNum == 3 && dayNum >= 21) || (monthNum == 4 && dayNum <= 19 )){
		astroSign = 'Aries';
	}	
	else if ((monthNum == 2 && dayNum >= 19) || (monthNum == 3 && dayNum <= 20 )){
	astroSign = 'Pisces';
	}
	else {
		astroSign = 'Aquarius';
	}
	

	// >= means greater than or equal to <= less than or equal to


	outputArea.innerHTML = 'Hello ' + firstName + '. You were born on a ' + weekDays[whichDayNdx] + '. Your sign is ' + astroSign + '.';

	//
	// return false to prevent form from resetting
	return false;
}
