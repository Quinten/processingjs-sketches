// click an hold down mouse button to drag the stick around, release to drop the stick

VerletPoint vPointA = new VerletPoint(165, 165);
VerletPoint vPointB = new VerletPoint(100, 100);
VerletStick vStick;

void setup() {
    background(255);
    size(330, 330); 
    smooth();
    frameRate(30); 
    strokeWeight(1);
    vStick = new VerletStick(vPointA, vPointB);
}

void draw() {
  if(mousePressed){
    vPointA.setPosition(mouseX, mouseY);
  }else{
    vPointA.y += 0.5;
  }
  vPointB.y += 0.5; 
  vPointA.update();
  vPointA.bounds(0, 0, 325, 325);
  
  vPointB.update();
  vPointB.bounds(0, 0, 325, 325);
  
  vStick.update();
  
  background(255); 
  vStick.render();
  vPointA.render();
  vPointB.render();
}

class VerletStick {
  VerletPoint pointA, pointB;
  float len;
  VerletStick(VerletPoint _pointA, VerletPoint _pointB){
    pointA = _pointA;
    pointB = _pointB;
    //len = sqrt(sq(pointB.x - pointA.x) + sq(pointB.y - pointA.y));
    len = dist(pointA.x, pointA.y , pointB.x, pointB.y);
  }
  void update(){
    float dst = dist(pointA.x, pointA.y , pointB.x, pointB.y);
    float diff = len - dst;
    float offsetX = (diff * (pointB.x - pointA.x) / dst) / 2;
    float offsetY = (diff * (pointB.y - pointA.y) / dst) / 2;
    pointA.x -= offsetX; pointA.y -= offsetY; pointB.x += offsetX; pointB.y += offsetY;
  }
  void render(){
    line(pointA.x, pointA.y , pointB.x, pointB.y);
  }
}

class VerletPoint {
    float x, y, oldX, oldY;
    VerletPoint(float _x, float _y) {
      setPosition(_x, _y);  
    }
    void setPosition(float _x, float _y) {
      x = oldX = _x;
      y = oldY = _y;
    }
    void update(){
      float tempX = x, tempY = y;
      x += getVx();
      y += getVy();
      oldX = tempX;
      oldY = tempY;
    }
    void bounds(float left, float top, float right, float bottom){
      x = constrain(x, left, right);
      y = constrain(y, top, bottom);
    }
    void setVx(float value){
      oldX = x - value;
    }
    float getVx(){
      return x - oldX;
    }
    void setVy(float value){
      oldY = y - value;
    }
    float getVy(){
      return y - oldY;
    }
    void render(){
      ellipse(x, y, 10, 10);
    }
}

