/* eslint-disable no-undef */

//    Detect Button Press;
const allButtons = document.querySelectorAll('button');

allButtons.forEach((button) => {
  button.addEventListener('click', function () {
    makeSound(this.innerHTML);
    buttonAnime(this.innerHTML);
  });
});

//   Detect KeyBoard Press;
$(document).on('keydown', (event) => {
  makeSound(event.key);
  buttonAnime(event.key);
});

//   Function Makes Sounds, takes single arg as key;
function makeSound(key) {
  switch (key) {
    case 'a':
      new Audio('sounds/drum-1.mp3').play();
      break;
    case 's':
      new Audio('sounds/drum-2.mp3').play();
      break;
    case 'd':
      new Audio('sounds/drum-3.mp3').play();
      break;
    case 'f':
      new Audio('sounds/drum-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'k':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    case 'l':
      new Audio('sounds/crash.mp3').play();
      break;
    default:
      console.log(this.innerHTML);
  }
}

//   Function adds animation class, then setTimeout -> removes;
function buttonAnime(currKey) {
  let pressedKey = $('.' + currKey);

  pressedKey.addClass('pressed');

  setTimeout(() => {
    pressedKey.removeClass('pressed');
  }, 300);
}
