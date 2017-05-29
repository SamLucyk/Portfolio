int n;
int y;
float x;
float noiseX;
color[] colors = {#25383C, #D1D0CE, #98AFC7, #82CAFA, #F88017 };

void setup(){
n = 600;
x = .05;

size(300, 900);
background(#212121);
stroke(255);
fill(#ADD8E6);
frameRate(1);
}
//test
void draw(){
      fill(colors[int(random(0, colors.length))]);
      for(int i = 1; i < n; i++) {
       x += .02;
       y = i* (height/n);
       noiseX = noise(x) * width;
       //line(0, y, noiseX, y);
       ellipse(noiseX, y, 5, 60);
      }
}