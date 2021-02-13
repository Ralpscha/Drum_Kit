// document.querySelector("button").addEventListener('click', clickHandler);

function clickHandler() {


  let audioSound = new Audio('sounds/crash.mp3');
  audioSound.play();
}


for(let i=0; i < document.querySelectorAll(".drum").length ; i++) {
  document.querySelectorAll(".drum")[i].addEventListener('click',  function() {
    this.style.color = "white";
  })
}


