let allkeys = document.querySelectorAll(".key");

console.log(allkeys[0].getAttribute("data-key"));
window.addEventListener("keydown", e => {
  let keypressed = e.key;

  switch (keypressed) {
    case "a":
      console.log(keypressed);
      //call a method with attributes so that it can append sound mathing data-key
      appendsound(0);
      break;

    case "s":
      console.log(keypressed);
      appendsound(1);
      break;
    case "d":
      console.log(keypressed);
      appendsound(2);
      break;
    case "f":
      console.log(keypressed);
      appendsound(3);
      break;
    case "g":
      console.log(keypressed);
      appendsound(4);
      break;
    case "h":
      console.log(keypressed);
      appendsound(5);
      break;
    case "j":
      console.log(keypressed);
      appendsound(6);
      break;
    case "k":
      console.log(keypressed);
      appendsound(7);
      break;
    case "l":
      console.log(keypressed);
      appendsound(8);
      break;
    default:
      console.log("ni bondha");
      break;
  }
});

//time to play correspondind sound

function appendsound(e) {
  let e1 = allkeys[e];
  e1.classList.add("playing");
  e1.classList.add("sound");
  let audiokey = document.getElementsByTagName("audio");
  //console.log(e);
  //console.log(audiokey[e]);

  audiokey[e].play();
}
//even listener for all clicked keys to end the transition
let allkeys1 = document.querySelectorAll(".key");

//console.log(allkeys1);

allkeys1.forEach(key =>
  key.addEventListener("transitionend", e => {
    //console.log(e);
    if (e.propertyName !== "transform") {
      //console.log(key);
      key.classList.remove("playing");
      key.classList.remove("sound");
    }
  })
);
