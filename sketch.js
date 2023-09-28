let home;
let lightbox;
let elements=[];
let elementBox=[];
let flag=0;

elementBox.push({x: 46, y: 185});
elementBox.push({x: 867 , y: 184 });
elementBox.push({x: 949 , y: 184 });

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

 
 
 
}

function mouseClicked(){
  console.log("clicked")
  console.log("elementBox.push({x:", locX, ", y:", locY, "});" );
  for (let i=0; i<elementBox.length; i++){
    let x=elementBox[i].x;
    let y=elementBox[i].y;
    if (locX>x && locY>y && locX<=x+82 && locY<=y+82 && flag==0){
      flag=1;
      
      drawLightBox(i);
    } 
    
  }


  if (flag=1 && locX>80 && locY>100 && locX<=127 && locY<=143){
    flag=0;
    clearLightBox();
  }
 
}

function draw() {
  locX=mouseX;
  locY=mouseY;

  
}

function drawLightBox(index){
  lightbox.background(0, 130);
  lightbox.image(elements[index+1], 78, 96.5, 921, 546);
  image(lightbox, 0, 0);

}

function clearLightBox(){
  lightbox.clear();
  clear();
  image(home, 0, 0, 1080, 780);
}