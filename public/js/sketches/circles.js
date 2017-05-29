var angle;
var maxLen;
var canvasWidth;

function setup() {
    setCanvas();
    window.addEventListener("resize", myResize, false);
    angle = PI / random(6, 12);
    noLoop();
}

function draw(){
    background('#212121');
    maxLen = 75;
    ellipseMode(CORNERS);
    var len = maxLen;
    var thickness = 10;
    stroke(0);
    translate(canvasWidth / 2, height);
    branch(len * random(.9, 1.02), thickness);
}

function branch(len, thickness) {
    angle = PI / random(6, 12)
    strokeWeight(thickness);
    setColor(len);
    line(0, 0, 0, -len);
    translate(0, -len);
    var branchLength = 4;
    if (len > branchLength){
        push();
        rotate(angle);
        branch(len * random(.60, .85), thickness * .67);
        pop();
        push();
        angle = PI / random(6, 12)
        rotate(-angle);
        branch(len * random(.60, .85), thickness * .67);
        pop();
    } 
    
}

function mousePressed() {
    redraw();
}

function myResize() {
    setCanvas();
    redraw();
}

function setCanvas() {
    var maxWidth = 800;
    canvasWidth = Math.min(window.innerWidth, maxWidth);
    var canvas = createCanvas(canvasWidth, 350);
    canvas.parent('circles-sketch-holder');
}

function setColor(len){
    if (len < .05 * maxLen){
        stroke(255);
        fill(255)
    }
    else if (len < .1 * maxLen){
        stroke('#ADD8E6');
        fill('#ADD8E6')
    } else if (len < .2 * maxLen){
        stroke('#A6C2CC');
    } else if (len < .4 * maxLen){
        stroke('#979797');
    } else if (len < .6 * maxLen){
        stroke('#656565');
    } else if (len < .8 * maxLen){
        stroke('#323232');
    } 
    else {
        stroke(0);
    }
}