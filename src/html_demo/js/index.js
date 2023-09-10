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
    const html = document.querySelector("html");
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
    pannel.append(closeBtn)
}

/**
 * Executes the main function.
 *
 * @param {type} - None
 * @return {undefined} - Does not return a value
 */
function main() {
    tipsMsg();
    app();
    appDemo();
}

main();
