//Create variables here
var dog, happyDog, database;
var foodS, foodStock;
var dogImg, happy;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happy = loadImage("images/dogImg1.png");
}

function setup(){
  database = firebase.database()
  createCanvas(500,500);

  dog = createSprite(250,250,10,10);
  dog.shapeColor = "red";
  dog.addImage(dogImg);

  foodStock = database.ref('food')
  foodStock.on("value",readStock);
}

function draw(){
  background(46, 139, 87);
  
 if(keyDown(UP_ARROW)){
      writeStock(foodS);
     dog.addImage(happy);
  }
  textSize(25);
  text("foodStock"+foodStock);
  fill("black");

  drawSprites();
}

function writeStock(x){
  database.ref('/').update({
      food:x
  })

}

function readStock(data){

foodS = data.val()
 
}
