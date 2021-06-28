//Button Pressed

var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML;
    makeSounds(buttonPressed);
    animateButton(buttonPressed);

  });
}

//Keyboard Pressed
document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  makeSounds(keyPressed);
  animateButton(keyPressed);

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
      console.log(buttonPressed);
      break;
  }
}

function animateButton(key){
  var activeButton = document.querySelector("." + key);
  activeButton.classList.toggle("pressed");
  setTimeout(function(){
    activeButton.classList.toggle("pressed");

  }, 200)


}
