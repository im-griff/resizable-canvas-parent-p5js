class Moon {
  constructor() {     
    this.r = 30;
    this.orbitSpeed = 0.015;
    this.orbitAngle = 0;
    this.x = width/2;
    this.y = height/2;
  }
  
  
  show() {
    noStroke();
    fill(255);
    this.x = width/2  + this.r*2 * cos(this.orbitAngle+1);
    this.y = height/2 + this.r*2 * sin(this.orbitAngle);
    
    circle(this.x, this.y, 6);
    this.orbitAngle += this.orbitSpeed;
  }
  
}