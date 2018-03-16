
// the rotation angle for the hands
//let handMovement = 0;

// // function setup() {
//     createCanvas(windowWidth, windowHeight);
//     colorMode(360, 100, 100);
// }
//
// function draw() {
//     background(178, 164, 196);
//
//     //digital clock
//     var h = hour();
//     var m = minute();
//     var s = second();
//     var c = color (113, 116, 170);
//     text(nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s,2), windowWidth/2, 50);
//     textAlign(CENTER);
//     textSize(24);
//     //rotate (-90);
//   //rotate(-HALF_PI);
//     //translate(windowWidth/2, windowHeight/2);
//
//     //clock face
//     drawCircle(width*0.5, height*0.5, 500, 75);
//
//     function drawCircle(xloc, yloc, size, num) {
//       var colorvalues = (360)/num; // gradient scale
//       var steps = size/num;
//       for (var i = 0; i < num; i++) {
//         fill(i*colorvalues,12, 116);
//         ellipse(xloc, yloc, size - i*steps, size - i*steps);
//       }
//     }
//     fill(c); // color hands
//     stroke(150, 100, 255);
//     let secondHand = map(s, 0, 60, 0, 360);
//
//     stroke(150, 255, 100);
//     let minuteHand = map(m, 0, 60, 0, 360);
//
//     stroke(255, 100, 150);
//     let hourHand = map(h % 12, 0, 12, 0, 360);
//
//     push();
//       // move the origin BACK to the center of the canvas
//       translate(windowWidth / 2, windowHeight / 2);
//       // move the second hand
//       rotate(secondHand);
//       stroke(150, 100, 255);
//       line(0, 0, 100, 0);
//     pop();
//
//     push();
//           // move the origin BACK to the center of the canvas
//       translate(windowWidth / 2, windowHeight / 2);
//           // move the minute hand
//       rotate(minuteHand);
//       stroke(c);
//       line(0, 0, 75, 50);
//     pop();
//
//     push();
//       // move the origin to the center of the canvas
//       translate(windowWidth / 2, windowHeight / 2);
//       // move the hour hand ( move 1/12th the speed of the minute hand )
//       rotate(hourHand);
//       stroke(c);
//       line(0, 0, 50, 0);
//     pop();
//     //stroke (255);
//   //  point(0, 0);
//     // increment the hands' angle one degree
//   //  handMovement += 1;
// }

function setup() {
   createCanvas(700, 700);
   angleMode(DEGREES);
   colorMode(360, 100, 100);
 }

 function draw() {
   background(178, 164, 196);
   translate(350, 350);
   //rotate(-90);

   let h = hour();
   let m = minute();
   let s = second();
   var c = color (113, 116, 170);
   stroke(106, 36, 175);
   fill(106, 36, 175);
   strokeWeight(3);
   text(nf(h, 2) + ":" + nf(m, 2) + ":" + nf(s,2), 0, -250);
   textAlign(CENTER);
   textSize(50);
   stroke(c);

  // clock face
    drawCircle (0*0.5, 0*0.5, 400, 28);
       //
    function drawCircle(xloc, yloc, size, num) {
         var colorvalues = (360)/num; // gradient scale
         var steps = size/num;
         for (var i = 0; i < num; i++) {
           fill(i*colorvalues,12, 116);
           ellipse(xloc, yloc, size - i*steps, size - i*steps);
         }
      }

   strokeWeight(5);
   noFill();
   let secondHand = map(s, -45, 15, 0, 360);
   let minuteHand = map(m, -45, 15, 0, 360);
   let hourHand = map(h % 12, -9, 3, 0, 360);


   push();
   rotate(secondHand);
   stroke(106, 36, 175);
   line(0, 0, 100, 0);
   pop();

   push();
   rotate(minuteHand);
   stroke (173, 104, 242);
   line(0, 0, 75, 0);
   pop();

   push();
   rotate(hourHand);
   stroke(211, 168, 255);
   line(0, 0, 50, 0);
   pop();

   stroke(255);
   point(0, 0);

 }
