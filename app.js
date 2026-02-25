let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-button');

let turnO = true; // O starts first

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText !== "") return;
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
        checkWin();
        });
});

const checkWin = () => {
    for(pattern of winningCombinations){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== "" && (pos1 === pos2) && (pos2 === pos3)){
            alert(pos1 + " wins!");
            resetGame();
        }

    }
}
resetButton.addEventListener('click', resetGame);

function resetGame(){
    boxes.forEach((box) => {
        box.innerText = "";
    });
    turnO = true;
}
