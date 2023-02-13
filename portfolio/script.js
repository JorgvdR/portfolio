var i = 0;
var text = "Jorg Van De Rijdt";
var speed = 100;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
