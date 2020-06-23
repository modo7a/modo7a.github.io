let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tongue.jpg') {
      myImage.setAttribute ('src','images/neon.jpg');
    } else {
      myImage.setAttribute ('src','images/tongue.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Languages are fun, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Languages are fun, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}