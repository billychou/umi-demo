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

app();
appDemo();

