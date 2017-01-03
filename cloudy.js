Particle[] particles = new Particle[27];
int nParticles = 27;

void setup() {
    background(#EDEBC9);
    size(1024, 64); 
    smooth();
    frameRate(30); 
    noStroke();
    for(int i = 0; i < nParticles; i++){
      particles[i] = new Particle();
    }
}

void draw() {
    for(int i = 0; i < nParticles; i++){
      particles[i].update();
    }
    background(#EDEBC9);
    fill(#568984);  
    for(int b = 0; b < nParticles; b++){
      ellipse(particles[b].x, particles[b].y, particles[b].radius, particles[b].radius);
    }
    fill(255);  
    for(int t = 0; t < nParticles; t++){
      ellipse(particles[t].x, particles[t].y, particles[t].radius - 14, particles[t].radius - 14);
    }
}

class Particle {
  float x, y, speedX, radius;
  Particle(){
    x = -height*2 + random(0, width + height*2);
    y = - random(60, height);
    //sprintln(x);
    speedX = random(10, 40)/10;
    radius = random((-y * 2), (height - y)*2); 
  }
  void update(){
    x += speedX;
    if(x > width + height*2){
      x = -height*2;
    }
  }
}

