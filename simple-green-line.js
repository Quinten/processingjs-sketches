int x = 0;
int y = 0;
int a = 0; 

void setup() {   
    background(255);
    size(480, 320);
    smooth();
    frameRate(30); 
    strokeWeight(2);
} 

void draw() {
    a++;
    if (a == 125){
        a = 0;
        background(255);  
    }
    stroke(0, 255, 75, a);
    int newX = random(0, width);
    int newY = random(0, height);
    line(x, y, newX, newY);
    x = newX;
    y = newY;
}


