let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
//let myVariable;
/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/
/*document.querySelector('html').addEventListener('click', () => {
    alert('别戳我，我怕疼。');
  });*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/MyImage.jpg') {
    myImage.setAttribute('src', 'images/MyImage2.jfif');
    } else {
    myImage.setAttribute('src', 'images/MyImage.jpg');
    }
}

let myButton = document.querySelector('button');
//let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

if(!localStorage.getItem('name')) {
setUserName();
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
 }

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}

  
  