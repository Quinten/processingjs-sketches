// This sketch builds on a prior work created by quintenc
// http://studio.sketchpad.cc/sp/pad/view/P69LbbFr2O/rev.1135

int cX = 330;
int cY = 330;

void setup() {   
    background(255); 
    size(330, 330); 
    smooth();
    frameRate(30);
} 

void draw() {
    //background(255);
    
    //noFill();
    cX = (cX < 0) ? width : cX - width/ 33;
    cY = (cY < 0) ? height : cY - height / 33;
    beginShape();
    fill(random(0,cY),random(0,cY),random(0,cY));
    vertex(width, 0);
    bezierVertex(width, cY, width, cY, cX, cY);
    bezierVertex(cX, height, cX, height, 0, height);
    bezierVertex(cX + 33, height, cX + 33, height, cX + 33, cY + 33);
    bezierVertex(width, cY + 33, width, cY + 33, width, 0);
    endShape();
    /*beginShape();
    fill(255);
    vertex(0, 0);
    bezierVertex(0, 0, 0, 0, width, 0);
    bezierVertex(width, cY, width, cY, cX, cY);
    bezierVertex(cX, height, cX, height, 0, height);
    bezierVertex(0, 0, 0, 0, 0, 0);
    endShape();*/
}


