
var sun
var earth
var saturn
var jupiter
var mars
var mercury
var neptune
var venus
var uranus

var Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune

var angle=0;
var anglespeed=0.2;
var sunRadius
var speed=0;
function preload(){
Sun= loadImage("myimages/Sun.png")
Mercury= loadImage("myimages/Mercury.png")
Venus= loadImage("myimages/Venus.png")
Earth=loadImage("myimages/Earth.png")
Mars= loadImage("myimages/Mars.png")
Jupiter= loadImage("myimages/Jupiter.png")
Saturn= loadImage("myimages/Saturn.png")
Uranus= loadImage("myimages/Uranus.png")
Neptine=loadImage("myimages/Neptune.png")
}

function setup(){
  createCanvas(800,800)
sun= createSprite(0,0)
sun.addImage("sun", Sun)
sun.scale=0.3;
sun.setCollider("circle",-85,-60,140)
sun.debug=true;

venus= createSprite(0,0)
venus.addImage("venus", Venus)
venus.scale=0.3;
venus.setCollider("circle",-85,-60,140)

mercury= createSprite(0,0)
mercury.addImage("mercury", Mercury)
mercury.scale=0.3;
mercury.setCollider("circle",-85,-60,140)
mercury.debug=true;

earth= createSprite(0,0)
earth.addImage("earth", Earth)
earth.scale=0.3;
earth.setCollider("circle",-85,-60,140)

mars= createSprite(0,0)
mars.addImage("mars", Mars)
mars.scale=0.3;
mars.setCollider("circle",-85,-60,140)
mars.debug=true;

jupiter= createSprite(0,0)
jupiter.addImage("jupiter", Jupiter)
jupiter.scale=0.3;
jupiter.setCollider("circle",-85,-60,140)
jupiter.debug=true;

saturn= createSprite(0,0)
saturn.addImage("saturn", Saturn)
saturn.scale=0.3;
saturn.setCollider("circle",-85,-60,140)
saturn.debug=true;

uranus= createSprite(0,0)
uranus.addImage("uranus", Uranus)
uranus.scale=0.3;
uranus.setCollider("circle",-85,-60,140)
uranus.debug=true;

neptune= createSprite(0,0)
neptune.addImage("neptune", Neptune)
neptune.scale=0.3;
neptune.setCollider("circle",-85,-60,140)
neptune.debug=true;


}

function draw(){
  background(0)

  angleMode(DEGREES);
  translate(width/2,height/2);
  rotate(speed)
  speed=speed+1

if( sun.collide(mercury)){
  mercury.destroy();
}

if( sun.collide(venus)){
  venus.destroy();
}

if( sun.collide(earth)){
  earth.destroy();
}

if( sun.collide(mars)){
  mars.destroy();
}

if( sun.collide(jupiter)){
  jupiter.destroy();
}

if( sun.collide(saturn )){
  saturn.destroy();
}

if( sun.collide(uranus)){
  uranus.destroy();
}

if( sun.collide(neptune)){
  neptune.destroy();
}

if (frameCount % 10 === 0) {
  sun.scale = sun.scale + 0.01;
}

drawSprites();
}

