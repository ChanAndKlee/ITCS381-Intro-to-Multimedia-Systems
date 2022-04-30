/*
    StudentID:  6388040
    Name:       Ariya Phengphon
    Section:    2
*/

let song, button;
var amp; // Amplitude
var historyAmp = [];

// For blinking eyes
var check=true;
var a = 0;
var j = 120;
var k = 1;
 
// Load the song (preparing)
function preload()
{
  BG = loadImage("twilight_full.jpg");
  song = loadSound("Always_With_Me.mp3");
  microbug = loadImage("microbug.png");
}

function setup()
{
  createCanvas(400, 600);
  createBtn();
  //Create an obj, Listening to the song
  amp = new p5.Amplitude();
}
 
function draw()
{
  var c;
  background(BG);
  noStroke();
 
  // Body
  c = color(0);
  fill(c);
  rect(47,350,298,300);
 
  // Hair
  c = color(0);
  fill(c);
  ellipse(195, 300, 310, 430);
 
  // Face
  c = color(237, 231, 222);
  fill(c);
  ellipse(195, 300, 250, 350);
  c = color(251, 245, 236);
  fill(c);
  ellipse(195, 300, 230, 350);
 
  // Purple eyes
  c = color(171, 141, 169);
  fill(c);
  ellipse(260, 210, 25, 45); // above
  ellipse(130, 210, 25, 45);  
  ellipse(260, 350, 35, 80); // below
  ellipse(130, 350, 35, 80);
  c = color(0);
  fill(c);
  
  // --------------- ANIMATE EYES --------------- //
  // Change the mode to DEGREES
  angleMode(DEGREES);
  arc(130, 260, 35, 25, 270+a, 270-a, CHORD);
  arc(260, 260, 35, 25, 270+a, 270-a, CHORD);
  // Closing eyes
  if((check == true) && (a <= j))
  {
    a += 3;
  }
  // Opening eyes
  else if (a > k)
  {
    // Keep doing until the condition is true
    check = false;
    a--;
  }
  // Go back to the orgin again (a == 1)
  else if (a == k)
  {
    check = true;
  }
  // --------------- ANIMATE EYES --------------- //
  
  ellipse(130, 290, 35, 10); // small eyes
  ellipse(260, 290, 35, 10);
 
  // Mouth
  stroke(0);
  strokeWeight(5);
  fill(c);
  getHistory();
 
  // Background
  noStroke();
  c = color(255);
  fill(c);
 
  // Microbug
  microbug.resize(140, 200);
}

// --------------- CREATING BUTTON --------------- //
 function createBtn() {
   button = createButton(
     "<img style='width: 50px' src='https://i.imgur.com/kWCTvXJ.png'/>");
   button.mousePressed(playSong);
   button.style("background", 0);
   button.style("border", 0);
   button.position(160, 600);
}
// --------------- CREATING BUTTON --------------- //

// --------------- ANIMATE MOUTH AND MICROBUG --------------- //
function getHistory() {
  var vol = amp.getLevel(); // 0 - 1
  ellipse(width / 2, 400, 100, vol * 200);
  image(microbug, 150, 430+(vol*100));
}
// --------------- ANIMATE MOUTH AND MICROBUG --------------- //

// --------------- START AND STOP BUTTON --------------- //
function playSong() {
  // Stop
  if (!song.isPlaying()) {
    song.play();
    // By default is 0-1 (but you can set any new value
    song.setVolume(1);
    button.html( // Stop button
 	"<img style='width: 50px'   src='https://i.imgur.com/5moWJVX.png'/>");
  }
  // Play
  else {
    song.pause();
    // Stop button
    button.html( 
   	"<img style='width: 50px' src='https://i.imgur.com/kWCTvXJ.png'/>");
  }
}
// --------------- START AND STOP BUTTON --------------- //