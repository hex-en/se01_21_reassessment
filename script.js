const code = [4, 4, 3, 1];
function init() {
    let userInput = getInput().split("").map(Number);
    console.log(code, userInput);
};
function getInput() {
    let input = prompt("Guess the numbers");
    return (input);
};

init();