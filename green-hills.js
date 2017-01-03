int topY = 0;

int dir = 2;

void setup() {   
    background(33);
    size(480, 320);
    smooth();
    frameRate(30); 
    noStroke();
} 

void draw() {
    topY += dir;
    if(topY > height || topY < 0){
        dir *= -1;
        topY += dir;
    }
    int topX = random(0, width);
    fill(0, ((topY / height)*255), 33);
    quad(0, height, 0, random(topY + 40, height), topX, topY, topX, height);
    quad(topX, height, topX, topY, width, random(topY + 20, height), width, height);
}


