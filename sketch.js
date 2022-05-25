var divWidth, divHeight;
var sketchCiner;
var canvas;

var moon;

function setup() {
  sketchContainer = document.getElementById('sketchContainer');
  canvas = createCanvas(1,1);
  canvas.parent(sketchContainer);
  updateCanvasSize();
  
  moon = new Moon();
  
  background(220);
  frameRate(60);

}

function draw() {
  checkResize();
  background(0);

  // circle and moon:
  fill(255); noStroke();
  circle(width/2, height/2, 80)
  moon.show();
}

function checkResize() {
  // If the width or height is different, run updateCanvasSize()
  if ((sketchContainer.offsetWidth  != divWidth) ||
       sketchContainer.offsetHeight != divHeight) {
    updateCanvasSize();
  }
}
function updateCanvasSize() {
  // Set width & height to the div
  divWidth  = sketchContainer.offsetWidth;
  divHeight = sketchContainer.offsetHeight;
  
  // do the resize
  resizeCanvas(divWidth, divHeight);
  
  // debug
  console.log('Sketch resized to: ' + divWidth + ' ' + divHeight);
  
}