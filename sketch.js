var background
var player, asteroid
var bgImg, plrImg, asteroidImg

function preload() {
bgImg = loadImage("background_space.png")
plrImg = loadImage("rocket1.png")
asteroidImg = loadImage("asteroid.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  player = createSprite(windowWidth / 2, windowHeight / 2 + 200, 10, 30);
  player.addImage("plrImg", plrImg);
  player.scale = 0.5
  asteroid = createSprite(windowWidth / 2, windowHeight / 2 - 300, 10, 30);
  asteroid.addImage("asteroidImg", asteroidImg)

}

function draw() {
background(bgImg);
player.velocityX = 5

if(keyDown(LEFT)) {
  player.x -= 10
}
if(keyDown(RIGHT)) {
  player.x += 10
}

drawSprites();
}
