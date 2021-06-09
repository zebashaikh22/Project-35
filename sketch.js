//Create variables here
var dog;
var happyDog;
var database;
var foodS = x;
var foodStock;

function preload()
{
	dogImg = loadImage("images/dogImg.png");
  happydogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  dog = createSprite(250, 250);
  dog.scale = 0.2;
  dog.addImage(dogImg);
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function readStock(data){
  foodS = data.val();
}


function draw() {  
  background(46, 139, 87);
  fill(0);
  strokeWeight(4);
  text("NOTE:PRESS UP ARROW KEY TO FEED DRAGO MILK..", 100, 50);
  fill(220);
  strokeWeight(3);
  text("FOOD:20", 220, 100);
  

  drawSprites();
  
  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happydogImg);
  }
}


function writeStock(x){
   if(x<=0){
     x=0;
   }else {
     x=x-1;
   }

   database.ref('/').update({
     Food:x
   })
}



