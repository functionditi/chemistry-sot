let home;


function preload(){
  home=loadImage('assets/home.png');
}

function setup() {
  createCanvas(1080, 780);
}

function draw() {
  image(home, 0, 0, 1080, 780);
}