//
// Declare global variables outside of functions here

var ageSliderObj = document.getElementById('ageSlider');
var displayMsgObj = document.getElementById('displayMsg');

//domtraditional
//ageSliderObj.addEventListener('change', userAgeFun, false);
//ageSliderObj.addEventListener('input', userAgeFun, false);

//doom II
ageSliderObj.addEventListener('input', function(evt){
	userAgeFun(evt, true);
}, false); 

function userAgeFun(evt, disAgeOnly) {
	console.log('userAgeFun called');
	var target = evt.target;
	console.log('target is ' + target);
	var age = target.value;
	console.log('age is ' + age);
	//
	if (disAgeOnly == true){
		displayMsgObj.innerHTML = age;
		return false;
	}
	//
	var msg= '';
	if (age <= 12){
		//child
		msg += age + '.. child';
	} else if (age <= 19) {
		//teenage
		msg += age + '.. teenager';
	} else if (age <= 24){
		//young adult
		msg += age + '.. young adult';
	} else if (age <= 64) {
		//adult
		msg += age + '.. adult';
	} else {
		//senior
		msg += age + '.. senior';
	} //end if
	displayMsg.innerHTML = msg;
} //end userAgeFun
