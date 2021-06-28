//Button Pressed

var numberOfDrums = document.querySelectorAll(".drum").length;
var arrayPressed = [];


for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML;
    makeSounds(buttonPressed);
    animateButton(buttonPressed);
    saveInArray(buttonPressed);
  });
}

//Keyboard Pressed
document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  makeSounds(keyPressed);
  animateButton(keyPressed);
  saveInArray(keyPressed);
});

document.querySelector(".btn-outline-success").addEventListener("click", function() {

  playAll();

});
document.querySelector(".btn-outline-danger").addEventListener("click", function() {

  resetArray();

});


function makeSounds(key) {
  switch (key) {
    case 'w': {
      var tomOne = new Audio('sounds/tom-1.mp3');
      tomOne.play();
      break;
    }
    case 'a': {
      var tomTwo = new Audio('sounds/tom-2.mp3');
      tomTwo.play();
      break;
    }
    case 's': {
      var tomThree = new Audio('sounds/tom-3.mp3');
      tomThree.play();
      break;
    }
    case 'd': {
      var tomFour = new Audio('sounds/tom-4.mp3');
      tomFour.play();
      break;
    }
    case 'j': {
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    }
    case 'k': {
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    }
    case 'l': {
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;
    }
    default:
      console.log(key);
      break;
  }
}

function animateButton(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");

  }, 200)
}

function saveInArray(key){
  arrayPressed.push(key);
}
function resetArray(){
  arrayPressed = [];
}

function playAll(){
  console.log(arrayPressed);
  for (var i=0; i<arrayPressed.length; i++){
    playEachKey(i);
  }
}
function playEachKey(i){
  setTimeout(function (){
    animateButton(arrayPressed[i]);
    makeSounds(arrayPressed[i]);
},i*300)
}
