//Last thing i was trying to do
//was creating all possible combinations of the code.
//I was trying to do that with nested loop that would
//save all possible combinations in the array.
//I didnt have time to make it work so i commented everything out.


const code = [4, 4, 3, 1];
//const guesses = allPossibleGuesses();

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
    console.log(guesses);
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
//function allPossibleGuesses() {
//    let possibleGuesses = Array();
//   for (i = 0; i < 1296; i++) {
//       let possibleGuesses[i] = Array();
//       for (j = 0; j < 4; j++) {
//           for (x = 1; x < 7; x++) {
//               possibleGuesses[i][j] = x;
//          }
//      }
//  }
//  return (possibleGuesses);
//}

init();