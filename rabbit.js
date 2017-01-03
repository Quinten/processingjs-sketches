// holddown mouse and drag the ragdoll rabbit by it's ear

VerletPoint vPointA = new VerletPoint(100, 100);
VerletPoint[] vPointArr = new VerletPoint[16];
VerletStick[] vStickArr = new VerletStick[24];

int nVP = 16;
int nVS = 24;

void setup() {
    background(#EDEBC9);
    fill(255);
    stroke(#568984);
    size(330, 330); 
    smooth();
    frameRate(30); 
    strokeWeight(1);
    vPointArr[0] = new VerletPoint(110, 100);
    vPointArr[1] = new VerletPoint(100, 140);
    vPointArr[2] = new VerletPoint(140, 140);
    vPointArr[3] = new VerletPoint(130, 100);
    vPointArr[4] = new VerletPoint(140, 100);
    vPointArr[5] = new VerletPoint(120, 180);
    vPointArr[6] = new VerletPoint(110, 180);
    vPointArr[7] = new VerletPoint(130, 180);
    vPointArr[8] = new VerletPoint(110, 220);
    vPointArr[9] = new VerletPoint(130, 220);
    vPointArr[10] = new VerletPoint(110, 240);
    vPointArr[11] = new VerletPoint(130, 240);
    vPointArr[12] = new VerletPoint(100, 260);
    vPointArr[13] = new VerletPoint(120, 260);
    vPointArr[14] = new VerletPoint(120, 260);
    vPointArr[15] = new VerletPoint(140, 260);
    vStickArr[0] = new VerletStick(vPointA,vPointArr[0]);
    vStickArr[1] = new VerletStick(vPointArr[0], vPointArr[1]);
    vStickArr[2] = new VerletStick(vPointArr[1], vPointA);
    vStickArr[3] = new VerletStick(vPointArr[1], vPointArr[2]);
    vStickArr[4] = new VerletStick(vPointArr[2], vPointArr[4]);
    vStickArr[5] = new VerletStick(vPointArr[4], vPointArr[3]);
    vStickArr[6] = new VerletStick(vPointArr[3], vPointArr[2]);
    vStickArr[7] = new VerletStick(vPointArr[2], vPointArr[5]);
    vStickArr[8] = new VerletStick(vPointArr[5], vPointArr[1]);
    vStickArr[9] = new VerletStick(vPointArr[5], vPointArr[6]);
    vStickArr[10] = new VerletStick(vPointArr[6], vPointArr[8]);
    vStickArr[11] = new VerletStick(vPointArr[8], vPointArr[5]);
    vStickArr[12] = new VerletStick(vPointArr[5], vPointArr[7]);
    vStickArr[13] = new VerletStick(vPointArr[7], vPointArr[9]);
    vStickArr[14] = new VerletStick(vPointArr[9], vPointArr[5]);
    vStickArr[15] = new VerletStick(vPointArr[5], vPointArr[10]);
    vStickArr[16] = new VerletStick(vPointArr[10], vPointArr[11]);
    vStickArr[17] = new VerletStick(vPointArr[11], vPointArr[5]);
    vStickArr[18] = new VerletStick(vPointArr[10], vPointArr[12]);
    vStickArr[19] = new VerletStick(vPointArr[12], vPointArr[13]);
    vStickArr[20] = new VerletStick(vPointArr[13], vPointArr[10]);
    vStickArr[21] = new VerletStick(vPointArr[11], vPointArr[14]);
    vStickArr[22] = new VerletStick(vPointArr[14], vPointArr[15]);
    vStickArr[23] = new VerletStick(vPointArr[15], vPointArr[11]);
}

void draw() {
  if(mousePressed){
    vPointA.setPosition(mouseX, mouseY);
  }else{
    vPointA.y += 0.5;
  }
  vPointA.update();
  vPointA.bounds(0, 0, 330, 330);
  
  for(int p = 0; p < nVP; p++){
    vPointArr[p].y += 0.5;
    vPointArr[p].update();
    vPointArr[p].bounds(0, 0, 330, 330);    
  }
  background(#EDEBC9);
  for(int s = 0; s < nVS; s++){
    vStickArr[s].update();
  }
  triangle(vPointArr[2].x, vPointArr[2].y, vPointArr[1].x, vPointArr[1].y, vPointArr[5].x, vPointArr[5].y);
  triangle(vPointA.x, vPointA.y, vPointArr[0].x, vPointArr[0].y, vPointArr[1].x, vPointArr[1].y);
  triangle(vPointArr[2].x, vPointArr[2].y, vPointArr[3].x, vPointArr[3].y, vPointArr[4].x, vPointArr[4].y);
  triangle(vPointArr[5].x, vPointArr[5].y, vPointArr[10].x, vPointArr[10].y, vPointArr[11].x, vPointArr[11].y);
  triangle(vPointArr[5].x, vPointArr[5].y, vPointArr[7].x, vPointArr[7].y, vPointArr[9].x, vPointArr[9].y);
  triangle(vPointArr[5].x, vPointArr[5].y, vPointArr[6].x, vPointArr[6].y, vPointArr[8].x, vPointArr[8].y);
  triangle(vPointArr[10].x, vPointArr[10].y, vPointArr[12].x, vPointArr[12].y, vPointArr[13].x, vPointArr[13].y);
  triangle(vPointArr[11].x, vPointArr[11].y, vPointArr[14].x, vPointArr[14].y, vPointArr[15].x, vPointArr[15].y); 
}

class VerletStick {
  VerletPoint pointA, pointB;
  float len;
  VerletStick(VerletPoint _pointA, VerletPoint _pointB){
    pointA = _pointA;
    pointB = _pointB;
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

