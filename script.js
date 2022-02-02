const code = [4, 4, 3, 1];

function init() {
    for (x = 0; x < 12; x++) {
        let userInput = getInput().split("").map(Number);

        let hints = analyseInput(userInput, code);


        if (hints[0] === 4) {
            alert("You broke the code")
            break;
        }
        alert("Numbers in right possition: " + hints[0] + ". Guessed numbers: " + hints[1]);
        console.log(code, userInput, hints[0], hints[1]);
    };

};
function analyseInput(userInput, code) {
    let hint1 = 0;
    let hint2 = 0;

    for (i = 0; i < 4; i++) {
        if (userInput[i] === code[i]) {
            hint1++;
        }
        else if (code.includes(userInput[i])) {
            hint2++;
        }
    }
    return [hint1, hint2];
};


function getInput() {
    let input = prompt("Guess the numbers");
    return (input);
};

init();