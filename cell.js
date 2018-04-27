function Cell(value, x, y, w){
  this.value = value;
  this.x = x;
  this.y = y;
  this.w = w;
}

Cell.prototype.show = function() {
  let c;
  noStroke();
  noFill();

  if (this.value !== '-') {
    c = color(0,255,0);
    fill(0);
  }

  if (this.value == 1) {
    c = color(255,0,0);
    fill(c);
  }

  rect(this.x,this.y,this.w,this.w);
}
