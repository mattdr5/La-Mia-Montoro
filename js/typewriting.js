

var headText = document.querySelector(".head-welcome h1");
var speed = 80;
var i = 0;

window.onload = function() {

    typeWritingEffect();

};

function typeWritingEffect() {
    
    let text = "Benvenuti nel mio sito!";
    if (i < text.length) {
        headText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWritingEffect, speed)
      }

  }