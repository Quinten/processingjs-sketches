// 3d scribble 2015
// by @qubecity

float fl = 400;
float vpX = 0;
float vpY = 0;

void setup(){
  size(1024, 748);
  frameRate(25);
  background(30);
  stroke(64,64,64);
  vpX = width/2;
  vpY = height/2;
}

Point3D pointA = new Point3D(0,0,0);
Point3D pointB = new Point3D(0,0,0);

void draw(){
  float lineSize = 40;
  float Lx = pointA.x, Ly = pointA.y, Lz = pointA.z; 
  float q = 240;
  float d = int(random(0,2))?lineSize:-lineSize;
  float r = int(random(0,3));
  if(r==2) pointB.x = (Lx+d>q||Lx+d<-q) ? -Lx/2 : Lx+d;
  if(r==1) pointB.y = (Ly+d>q||Ly+d<-q) ? -Ly/2 : Ly+d;
  if(r==0) pointB.z = (Lz>q||Lz<-q) ? -Lz/2 : Lz+d;
  pointA.update();
  pointB.update();
  line(pointA._x, pointA._y, pointB._x, pointB._y);
  pointA.x = pointB.x;
  pointA.y = pointB.y;
  pointA.z = pointB.z;
}

class Point3D {
  float x, y, z;
  float _x, _y;
  Point3D(float xpos, float ypos, float zpos) {
  x = xpos;
  y = ypos;
  z = zpos;  
  }
  void update(){
    float scale = fl / (fl + z);
    _x = vpX + x * scale;
    _y = vpY + y * scale;
  }
}
