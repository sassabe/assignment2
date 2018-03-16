var img; // Declare variable 'img'.

function setup() {
    img = loadImage("images/unicorn.png");  // Load the image
    createCanvas(700, 700);
    angleMode(DEGREES);
    colorMode(360, 100, 100);

}

function draw() {

    background(196, 216, 255); //sky
    translate(350, 350);
    rotate(180);

    //clock hand variables
    let h = hour();
    let m = minute();
    let s = second();
    var c = color (113, 116, 170);

    //clock/rainbow hands
    strokeWeight(20);
    noFill();

    stroke(249, 180, 89);
    let secondHand = map(s, 0, 60, 0, 180);
    arc(0, 0, 480, 480, 0, secondHand);
    stroke(249, 67, 116);
    arc(0, 0, 520, 520, 0, secondHand);

    stroke(249, 222, 89);
    let minuteHand = map(m, 0, 60, 0, 180);
    arc(0, 0, 440, 440, 0, minuteHand);
    stroke (52, 219, 180);
    arc(0, 0, 400, 400, 0, minuteHand);

    stroke(76, 177, 255);
    let hourHand = map(h %12, 0, 12, 0, 180);
    arc(0, 0, 360, 360, 0, hourHand);
    stroke(147, 114, 255);
    arc(0, 0, 320, 320, 0, hourHand);

    //move rainbown
    push();
    rotate(secondHand);
    pop();

    push();
    rotate(minuteHand);
    pop();

    push();
    rotate(hourHand);
    pop();

    //grass
    noStroke();
    fill(143, 239, 147);
    rect(-350,0,700,-350);

    // Displays the image at half size at point
    rotate(-180);
    image(img, -15, -25);
    stroke (76, 177, 255);

  }
