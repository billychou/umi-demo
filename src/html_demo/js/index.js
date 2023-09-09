const formGuessField = document.querySelector(".guessField");
const formSubmit = document.querySelector(".guessSubmit");

// result paragraph
const resultGuess  = document.querySelector(".resultGuess");
const resultHighOrLow = document.querySelector(".resultHighOrLow");
const demo = document.querySelector(".demo");


const randomValue = Math.floor(Math.random() * 100);

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
app();

