function make2DArray(cols,rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

let grid;
let cols = 400;
let rows = cols;
let w = 2;

function setup() {
  createCanvas(901,901)
  grid = getUlam(cols,1);
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      value = grid[i][j];
      grid[i][j] = new Cell(value,i*w, j*w,w);
    }
  }
}

function draw() {
  background(255)
  for (var i = 0; i < cols; i++) {
    for (var j = 0; j < rows; j++) {
      grid[i][j].show()
    }
  }
}

function getUlam(n,i){
  var spiral = make2DArray(n,n)
  let right = "RIGHT";
  let up = "UP";
  let left = "LEFT";
  let down = "DOWN";

  let dir = right;
  let j = i;
  let y = floor(n/2);
  let x;
  if (n%2 == 0) {
    x = y-1;
  }else{
    y;
  }

  while(j <= ((n*n) -1 + i)){
    if (j == 1) {
      spiral[y][x] = j
    }else if (isPrime(j)) {
      spiral[y][x] = j;
    } else{
      spiral[y][x] = '-';
    }

    switch (dir) {
      case "RIGHT":
				if(x <= (n - 1) && spiral[y - 1][x] == null && j > i) {dir = up;}
        break;
			case "UP":
				if(spiral[y][x - 1] == null) {dir = left};
        break;
			case "LEFT":
				if(x == 0 || spiral[y + 1][x] == null) {dir = down};
        break;
			case "DOWN":
				if(spiral[y][x + 1] == null) {dir = right};
        break;
    }

    switch(dir){
				case "RIGHT":	x++; break;
				case "UP": 	y--; break;
				case "LEFT":	x--; break;
				case "DOWN":	y++; break;
			}

    j++;
  }
  console.log(spiral);
    return spiral;
}

function isPrime(a) {
  if(a == 2)  {return true;}
  if(a <= 1 || a % 2 == 0) {return false};
  let max = Math.sqrt(a);
  for(let n = 3; n <= max; n += 2){
    if(a % n == 0) {return false;}
  }
  return true;
}
