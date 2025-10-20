let mySong, fft;
let color1, color2, color3;

function preload() {
    mySong = loadSound('assets/rip_and_tear.mp3');
    
}


function setup() {
    createCanvas(600, 600);
    fft = new p5.FFT(0.8, 128);

    color1 = color(255, 0, 0);
    color2 = color(0, 255, 0);
    color3 = color(0, 0, 255);

    mySong.addCue(3, changeColors1);
    mySong.addCue(6, changeColors2);
    mySong.addCue(9, changeColors3);
    mySong.addCue(12, changeColors4);


}

function draw() {
    background(220);
    fill(0, 50);
    rect(0, 0, width, height);

     let spectrum = fft.analyze();
  let bass = fft.getEnergy('bass');
  let mid = fft.getEnergy('mid');
  let treble = fft.getEnergy('treble');
    
    noStroke();
  let numBars = 10;
  for (let i = 0; i < numBars; i++) {
    let specIndex = int(map(i, 0, numBars, 0, spectrum.length -100));
    let barHeight = map(spectrum[specIndex], 0, 155, 0, height/2);
    
    fill(color3);
    rect(i * (width/numBars), height - barHeight, width/numBars - 2, barHeight);
  }
}

function mousePressed() {
    mySong.play();

}

function changeColors1() {
  color1 = color(255, 0, 100);
  color2 = color(0, 255, 255);
  color3 = color(255, 255, 0);
}

function changeColors2() {
  color1 = color(150, 0, 255);
  color2 = color(0, 255, 100);
  color3 = color(255, 100, 0);
}

function changeColors3() {
  color1 = color(255, 0, 0);
  color2 = color(0, 150, 255);
  color3 = color(255, 255, 255);
}

function changeColors4() {
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  color3 = color(random(255), random(255), random(255));
}

 
