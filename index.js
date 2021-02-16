function soundHandler(geluid) {
  let drumGeluid = new Audio(geluid);
  drumGeluid.play();
}

document.addEventListener('keypress', function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
})


for(let i=0; i < document.querySelectorAll(".drum").length ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click', function () {
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})
}


function makeSound(key) {
  switch (key) {
    case "w":
      soundHandler('sounds/crash.mp3');
      break;
    case "a":
      soundHandler('sounds/kick-bass.mp3');
      break;
    case "s":
      let snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "d":
      let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "j":
      let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "k":
      let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "l":
      let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    default:
      alert('wrong key');
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");

  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  },200);
}
