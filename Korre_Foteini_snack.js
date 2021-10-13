/*
 * @name Load and Display Image
 * @description Images can be loaded and displayed to the screen at their
 * actual size or any other size.
 * <p><em><span class="small"> To run this example locally, you will need an 
 * image file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">
 * local server</a>.</span></em></p>

 */
let img; // Declare variable 'img'.
let img2; //stores 2nd image
let opacity = 0;
let header;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('data/cafe.jpg'); // Load the image
  img2 = loadImage('data/cat.png');
  imageMode(CENTER);
  // this adds a header in HTML instead of writing text
  // on the canvas as image. This allows us to monitor 
  // whether the mouse is over the header easily

  //otherwise we'd need to check if the coordinates of the mouse
  //are over a specific rectangle ourselves
  header = createElement("h1", "What are you doing here?");
  header.mouseOver(newText);
  header.mouseOut(oldText);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
  
  let imgRatio = img.width/img.height;
  let img2Ratio = img2.width/img2.height;
  
  background('#F7DF5D');
  // Displays the image at its actual size at point (0,0)
  image(img, width/2, height/2, windowWidth, windowWidth/imgRatio);
  header.position((windowWidth-header.width)/5,(windowHeight-header.height)/5);
  //tint (255, opacity);
  // fill('yellow');
  // textFont('Didot');
  // textAlign(CENTER, CENTER);
  // text('what are you doing here?', windowWidth/2, windowWidth/2);
  // textSize(width/18);
  //image(img2, width/2, height /2, windowWidth/2, windowWidth/img2Ratio/2);
  //noTint ();
  //fill(0);


  // Displays the image at point (0, height/2) at half size
  //image(img, 0, height / 2, img.width / 2, img.height / 2);
}


function newText() {
  header.html("I think you should go back.");
}

function oldText() {
  header.html("What are you doing here?");
}
