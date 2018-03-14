var gClickCount = 0;
var x = 0;
var y = 0;
var loopCount = 0;

function setup() {
    createCanvas(700, 700);
    colorMode(360, 100, 100);

}

function mousePressed() {
  gClickCount++;
  loopCount = 0;
}
 function draw () {
     background(178, 164, 196);
     for (var y = 0; y <= 10; y += 10) {
       for (var x = 0; x <=10; x+= 50) {
         for (var loopCount = 1; loopCount <= gClickCount; loopCount++) {
           x = loopCount*10;
           y = 5;
           line(x, y, x, y+20);
            if (loopCount % 5 == 0) {
              x = (gClickCount - 4)*10;
              y = 10;
              line(x, y, x+5*10, 0);
            }
          }
        }
      }
    }

function keyPressed() {
  gClickCount = 0;
}
