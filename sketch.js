var sketchContainer, divWidth, divHeight;
var canvas;

function setup() {
  sketchContainer = document.getElementById('sketchContainer');
  canvas = createCanvas(1,1);
  canvas.parent(sketchContainer);
  updateCanvasSize();
}

function draw() {
  checkResize();
  background(0);
}

function checkResize() {
  // If the width or height is different, run updateCanvasSize()
  if ((sketchContainer.offsetWidth  != divWidth) || sketchContainer.offsetHeight != divHeight) {
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
