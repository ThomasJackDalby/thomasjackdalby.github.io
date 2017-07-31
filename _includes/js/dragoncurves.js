var diameter = 25;
var thickness = 4;


function setup() {
    var canvas1 = createCanvas(200, 200);
    canvas1.parent("curve1");
}

function draw() {
    background(51);
    translate(width/2, height/2);
    stroke(255);
    noFill();
    strokeWeight(thickness);
    var curve = calculate_curve(4);
    draw_curve(curve, 0);
    noLoop();
}

function draw_curve(curve, index) {
    if (index >= curve.length) return;
    var x = -diameter/2.0;
    var rotation_angle = -Math.PI/2.0;
    var end_angle = 0;
    var start_angle = -Math.PI/2.0;

    if (curve[index] == 1)
        x *= -1;
        rotation_angle *= -1;
        start_angle = Math.PI;
        end_angle = 3*Math.PI/2.0;
    }
    
    arc(x, 0, diameter, diameter, start_angle, end_angle);
    y = -diameter/2.0;
    translate(x, y);
    rotate(rotation_angle);
    draw_curve(curve, ++index);    
}

function calculate_curve(order) {
    if (order == 0) return [1];
    var head = calculate_curve(order-1);
    var tail = head.slice(); // Copy the head section.
    tail[tail.length/2-0.5] = 0; // Invert the middle of the tail section.
    return head.concat([1]).concat(tail);
}