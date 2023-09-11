// import random from "./utils";

const formGuessField = document.querySelector(".guessField");
const formSubmit = document.querySelector(".guessSubmit");

// result paragraph
const resultGuess  = document.querySelector(".resultGuess");
const resultHighOrLow = document.querySelector(".resultHighOrLow");
const demo = document.querySelector(".demo");


// const randomValue = Math.floor(Math.random() * 100);
const  randomValue = random(500);
console.log(randomValue);

/**
 * 提交后check事件
 */
function guessCheck() {
    const guessValue = formGuessField.value;
    if (guessValue > randomValue) {
        alert("太大了");
    } else if (guessValue < randomValue) {
        alert("太小了");
    } else {
        alert("You Got It");
        disableGusss();
    }
}

/**
 * guess disable
 */
function disableGusss() {
    formGuessField.disabled = true;
}

console.log(formGuessField);
console.log(formSubmit);
formSubmit.addEventListener("click", guessCheck);

function handleOnClick() {

}

function app() {
    document.getElementById("app").innerHTML = "Hello World";
}


/**
 * A function that sets the innerHTML of the element with id "demo" to "demo".
 *
 * @param {none} - This function does not take any parameters.
 * @return {none} - This function does not return any value.
 */
const appDemo = () => {
    document.getElementById("demo").innerHTML = "demo";
}

/**
 * Generates a message box with a close button.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function tipsMsg() {
    const html = document.querySelector("body");
    const pannel = document.createElement("div");
    pannel.setAttribute("class", "msgBox");
    html.appendChild(pannel);
    
    // msg box
    const msg = document.createElement("p");
    msg.textContent = "This is a message box";
    pannel.append(msg);

    // button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "关闭"
    pannel.append(closeBtn);

    /**
     * Deletes the pannel element when the close button is clicked.
     *
     * @param {MouseEvent} event - The click event object.
     * @return {undefined} This function does not return anything.
     */
    closeBtn.onclick = () =>  {
        pannel.parentNode.removeChild(pannel);
    };
}

/**
 * Attaches a click event listener to the container element.
 * When the container is clicked, it changes the background color of the clicked element.
 *
 * @param {Event} event - The click event object.
 * @return {void} This function does not return anything.
 */
function containerEvent() {
    const container = document.querySelector(".container");
    container.addEventListener("click", (event) => {
        event.target.style.backgroundColor = bgChange();
    });
}



function demoCanvas() {
    const canvas = document.querySelector("canvas");
    console.log(canvas);
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);
    Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    };

    Ball.prototype.update = function () {
        if (this.x + this.size >= width) {
          this.velX = -this.velX;
        }
      
        if (this.x - this.size <= 0) {
          this.velX = -this.velX;
        }
      
        if (this.y + this.size >= height) {
          this.velY = -this.velY;
        }
      
        if (this.y - this.size <= 0) {
          this.velY = -this.velY;
        }
      
        this.x += this.velX;
        this.y += this.velY;
    };



}



/**
 * Executes the main function.
 *
 * @param {type} - None
 * @return {undefined} - Does not return a value
 */
function main() {
    // 消息提醒
    tipsMsg();
    app();
    appDemo();
    // 通过绑定事件更换随机颜色模块
    containerEvent();
    demoCanvas();
    let testBall = new Ball(50, 100, 4, 4, "blue", 10);
    testBall.x;
    testBall.size;
    testBall.color;
    testBall.draw();

    let balls = [];
    while (balls.length < 25) {
        let size = randomMinMax(10, 20);
        let ball = new Ball(
            // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
            randomMinMax(0 + size, width - size),
            randomMinMax(0 + size, height - size),
            randomMinMax(-7, 7),
            randomMinMax(-7, 7),
            randomColor(),
            size,
        );
        balls.push(ball);
    }
}

main();
