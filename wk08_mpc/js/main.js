//
//
// 
function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove('blackScreen');
}

var pisObj = document.getElementById('pis');
var scoObj = document.getElementById('sco');
var aquObj = document.getElementById('aqu');

var displayObj = document.getElementById('display');

var allpicsObj = document.getElementById('allpics');

pisObj.addEventListener('click', function (evt) {
  displayZodSign(evt, 'pis');
}, false);

scoObj.addEventListener('click', function (evt) {
  displayZodSign(evt, 'sco');
}, false);

aquObj.addEventListener('click', function (evt) {
  displayZodSign(evt, 'aqu');
}, false);

function displayZodSign(evt, whichOne) {
  console.log('displayZodSign called ' + whichOne);
  //
  var imgArray = allpicsObj.children;
  //
  console.log('imgArray is ' + imgArray.length);
  console.log('imgArray is ' + imgArray[0].tagName);
  //
  // Remove display class from all img elements
  for (lp = 0; lp < imgArray.length; lp++) {
    imgArray[lp].classList.remove('display');
  }

  switch (whichOne) {
  case 'pis':
    imgArray[1].classList.add('display');
    break;
  case 'sco':
    imgArray[2].classList.add('display');
    break;
  case 'aqu':
    imgArray[3].classList.add('display');
    break;
  default:
  }
}