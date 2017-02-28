//
//
// 
function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

var pisObj = document.getElementById('pis');
var scoObj = document.getElementById('sco');
var aquObj = document.getElementById('aqu');

//var displayObj = document.getElementById('display');
var allpicsObj = document.getElementById('allpics');

pisObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'pis');
}, false)

scoObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'sco');
}, false)

aquObj.addEventListener('click', function(evt) {
	displayZodSign(evt, 'aqu');
}, false)

function displayZodSign(evt, whichOne) {
	console.log('displayZodSign called ' + whichOne);

	var imgArray = allpicsObj.children;
	console.log('imgArray is ' + imgArray)
	console.log('imgArray is ' + imgArray.length)
	console.log('imgArray 2 is ' + imgArray[2].tagName)

	//imgArray[0].classList.remove('display');
	//imgArray[3].classList.add('display');

	//Loop through array and remove display class from everything
	for (lp = 0; lp < imgArray.length; lp++) {
		imgArray[lp].classList.remove('display');
	}


	switch (whichOne){
		case 'pis':
			//display big image for pis
			//displayObj.src = 'img/ful_pisces.png';
			imgArray[1].classList.add('display');
			break;
		case 'sco':
			//displayObj.src ='img/ful_scorpio.png';
				imgArray[2].classList.add('display');
			break;
		case 'aqu':
			//displayObj.src ='img/ful_aquarius.png';
			imgArray[3].classList.add('display');
			break;

		default:
			//displayObj.src = 'img/ful_blank.png';
			imgArray[0].classList.add('display');

	}
}





