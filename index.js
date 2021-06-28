//Button Pressed

var numberOfDrums = $(".drum").length;
var arrayPressed = [];
var timeOfPlay = [];
var time = 0;
var keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];


  $(".drum").click(function() {
    var buttonPressed = this.innerHTML;
    makeSounds(buttonPressed);
    animateButton(buttonPressed);
    saveInArray(buttonPressed);
  });


//Keyboard Pressed
$(document).keypress(function(event) {
  var keyPressed = event.key;
  if (keys.includes(keyPressed)) {
    makeSounds(keyPressed);
    animateButton(keyPressed);
    saveInArray(keyPressed);
  }
});

$(".btn-outline-success").click(function() {

  playAll();

});
$(".btn-outline-danger").click(function() {

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
      console.log("key not available " + key);
      break;
  }
}

function animateButton(key) {

  if (keys.includes(key)) {
    var activeButton = $("." + key);
    activeButton.toggleClass("pressed");
    setTimeout(function() {
      activeButton.toggleClass("pressed");

    }, 200)
  }
}

function saveInArray(key) {
  arrayPressed.push(key);
}

function resetArray() {
  arrayPressed = [];
}

function playAll() {
  if (arrayPressed.length == 0)
    alert("You should play first.");
  else {
    for (var i = 0; i < arrayPressed.length; i++) {
      playEachKey(i);
    }
  }
}

function playEachKey(i) {
  setTimeout(function() {
    animateButton(arrayPressed[i]);
    makeSounds(arrayPressed[i]);
  }, i * 300)
}
