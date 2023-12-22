/**
 * Generates a random number.
 *
 * @param {number} number - The maximum value of the random number.
 * @return {number} - The randomly generated number.
 */
function random(number) {
  return Math.floor(Math.random() * number);
}

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max-min)) + min;
}

function randomColor() {
  return `rgb(${randomMinMax(0, 255)}, ${randomMinMax(0, 255)}, ${randomMinMax(0, 255)})`;
}


function bgChange() {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  return rndCol;
}

const person = {
  name: "Christ",
  age: 12,
  introduceSelf () {
   console.log(`你好，我是${this.name},我${this.age}岁了`); 
  }
}

function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`你好，我是${this.name}`);
  };
}

async function populate() {
  const requestUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const request = new Request(requestUrl);
  const response = await fetch(request);
}


function Ball(x, y, velX, velY, color, size) {
  this.x = x; 
  this.y = y; 
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}


