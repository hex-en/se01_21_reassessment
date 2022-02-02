const code = [4, 4, 3, 1];
function init() {
    for (x = 0; x < 12; x++) {
        let userInput = getInput().split("").map(Number);
        let hint = 0;

        for (i = 0; i < 4; i++) {
            if (userInput[i] === code[i]) {
                hint++;
            }
        }
        if (hint === 4) {
            alert("You broke the code")
            break;
        }
        alert("Numbers in right possition: " + hint)
        console.log(code, userInput, hint);
    };

};
function getInput() {
    let input = prompt("Guess the numbers");
    return (input);
};

init();