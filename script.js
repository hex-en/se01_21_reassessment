const code = [4, 4, 3, 1];

function init() {
    for (x = 0; x < 12; x++) {
        let userInput = getInput().split("").map(Number);

        let hint1 = rightPos(userInput, code);
        let hint2 = rightGuess(userInput, code);

        if (hint1 === 4) {
            alert("You broke the code")
            break;
        }
        alert("Numbers in right possition: " + hint1 + ". Guessed numbers: " + hint2);
        console.log(code, userInput, hint1, hint2);
    };

};
function rightPos(userInput, code) {
    let hint1 = 0;

    for (i = 0; i < 4; i++) {
        if (userInput[i] === code[i]) {
            hint1++;
        }
        //else if (code.includes(userInput[i] === true)) {
        //     hint2++;
        // }
    }
    return (hint1);
};
function rightGuess(userInput, code) {
    let hint2 = 0;

    for (i = 0; i < 4; i++) {
        if (userInput[i] === code[i]) {

        }
        else if (code.includes(userInput[i])) {
            hint2++;
        }
    }
    return (hint2);
}
function getInput() {
    let input = prompt("Guess the numbers");
    return (input);
};

init();