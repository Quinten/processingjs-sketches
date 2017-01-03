// This sketch builds on a prior work created by quintenc
// http://studio.sketchpad.cc/sp/pad/view/h7Vqag0as5/rev.201

int x = 0;
int y = 0;

void setup() {   
    background(255);
    size(480, 320);
    smooth();
    frameRate(30); 
    strokeWeight(2);
} 

void draw() {
    fill(#ffffff, 20);
    rect(0,0,width,height);
    stroke(0, 255, 75);
    int newX = random(0, width);
    int newY = random(0, height);
    line(x, y, newX, newY);
    x = newX;
    y = newY;
}


