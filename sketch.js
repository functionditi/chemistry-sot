let home;
let lightbox;
let elements=[];
let elementBox=[];

elementBox.push({x: 46, y: 185});

let locX, locY;

function preload(){
  home=loadImage('assets/home.png');
  for (let i=1; i<46; i++){
    elements[i]=loadImage('assets/lightboxes/'+i+'.png');
  }
}

function setup() {
  createCanvas(1080, 780);
  lightbox=createGraphics(1080, 780);
  background(255);
  image(home, 0, 0, 1080, 780);

  lightbox.background(0, 130);
 
 
}

function mouseClicked(){
  for (let i=0; i<elementBox.length; i++){
    let x=elementBox[i].x;
    let y=elementBox[i].y;
    if (locX>x && locY>y && locX<=x+82 && locY<=y+82){
      console.log("clicked")
      drawLightBox(i);
    } 
    
  }
 
}

function draw() {
  locX=mouseX;
  locY=mouseY;

  console.log(locX, locY) //46, 184, 
}

function drawLightBox(index){
  lightbox.image(elements[index+1], 78, 96.5, 921, 546);
  image(lightbox, 0, 0);



}