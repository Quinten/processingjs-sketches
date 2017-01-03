int cX = 330;
int cY = 330;

void setup() {   
    background(#D73648); 
    size(320, 240); 
    smooth();
    frameRate(30);
} 

void draw() {
    background(#D73648);
    if((cX < -width*2) || cY < -height*2){
        cX = width;
        cY = height;
    }else{
        cX -= width/ 33;
        cY -= height / 33;        
    }
    beginShape();
    fill(#B12F43);
    vertex(width, 0);
    bezierVertex(width, cY, width, cY, cX, cY);
    bezierVertex(cX, height, cX, height, 0, height);
    bezierVertex(0, cY + (height - cY)/2, width, cY + (height - cY)/2, width, 0);
    endShape();
    beginShape();
    fill(#D73648);
    vertex(0, 0);
    bezierVertex(0, 0, 0, 0, width, 0);
    bezierVertex(width, cY, width, cY, cX, cY);
    bezierVertex(cX, height, cX, height, 0, height);
    bezierVertex(0, 0, 0, 0, 0, 0);
    endShape();
}


