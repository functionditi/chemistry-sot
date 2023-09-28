let home;
let lightbox;
let elements=[];
let elementBox=[];
let flag=0;

elementBox.push({x: 46, y: 185});
elementBox.push({x: 867 , y: 184 });
elementBox.push({x: 949 , y: 184 });
elementBox.push({x: 48 , y: 267 });
elementBox.push({x: 130 , y: 268 });
elementBox.push({x: 704 , y: 267 });
elementBox.push({x: 786 , y: 267 });
elementBox.push({x: 868 , y: 267 });
elementBox.push({x: 951 , y: 267 });
elementBox.push({x: 49 , y: 350 });
 elementBox.push({x: 130 , y: 350 });
 elementBox.push({x: 212 , y: 350 });
 elementBox.push({x: 295 , y: 351 });
 elementBox.push({x: 377 , y: 351 });
 elementBox.push({x: 458 , y: 350 });
 elementBox.push({x: 540 , y: 350 });
 elementBox.push({x: 621 , y: 350 });
 elementBox.push({x: 703 , y: 350 });
 elementBox.push({x: 786 , y: 351 });
 elementBox.push({x: 869 , y: 351 });
 elementBox.push({x: 950 , y: 352 });
 elementBox.push({x: 49 , y: 433 });
 elementBox.push({x: 130 , y: 433 });
 elementBox.push({x: 212 , y: 433 });
 elementBox.push({x: 294 , y: 432 });
 elementBox.push({x: 376 , y: 432 });
 elementBox.push({x: 458 , y: 433 });
 elementBox.push({x: 540 , y: 432 });
 elementBox.push({x: 622 , y: 433 });
 elementBox.push({x: 705 , y: 433 });
 elementBox.push({x: 787 , y: 434 });
 elementBox.push({x: 869 , y: 434 });
 elementBox.push({x: 951 , y: 433 });
 elementBox.push({x: 49 , y: 515 });
 elementBox.push({x: 130 , y: 515 });
 elementBox.push({x: 212 , y: 515 });
 elementBox.push({x: 294 , y: 516 });
 elementBox.push({x: 376 , y: 516 });
 elementBox.push({x: 459 , y: 514 });
 elementBox.push({x: 540 , y: 515 });
 elementBox.push({x: 623 , y: 516 });
 elementBox.push({x: 706 , y: 515 });
 elementBox.push({x: 787 , y: 516 });
 elementBox.push({x: 869 , y: 514 });
 elementBox.push({x: 951 , y: 516 });

let locX, locY;

function preload(){
  home=loadImage('assets/home.png');
  elements[1]=loadImage('assets/lightboxes/'+1+'.png');
  // for (let i=1; i<46; i++){
  //   elements[i]=loadImage('assets/lightboxes/'+i+'.png');
  // }
}

function setup() {
  createCanvas(1080, 780);
  lightbox=createGraphics(1080, 780);
  background(255);
  image(home, 0, 0, 1080, 780);

 
 
 
}

function touchStarted(){
  //console.log("clicked")
  console.log("elementBox.push({x:", locX, ", y:", locY, "});" );
  for (let i=0; i<elementBox.length; i++){
    let x=elementBox[i].x;
    let y=elementBox[i].y;
    if (locX>x && locY>y && locX<x+82 && locY<y+82 && flag==0){
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