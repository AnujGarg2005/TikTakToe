console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
// let gameover = new Audio("gameover.mp3");
let turn = "X";
let gameover = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

//reset code


function resetGame() {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
    document.querySelector(".line").style.width = "0";
}

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxText');
    let wins = [
    [0, 1, 2, 0, 5, 0],
    [3, 4, 5, 0, 15, 0],
    [6, 7, 8, 0, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
];

    wins.forEach(e => {
        if (
            (boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) &&
            (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) &&
            (boxtexts[e[0]].innerText !== '')
        ) {
            document.querySelector('.Info').innerText = boxtexts[e[0]].innerText + " Won!";
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '400px';
            document.querySelector(".line").style.width = "20vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

            // reset automatically

            setTimeout(() => {
                resetGame();
            }, 1500);

        }
    });
}

// game music

//document.body.addEventListener("click", () => {
//  if (music.paused) {
//       music.play();
//  }
//}, { once: true });


// game logic


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});



//reset

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"

    gameover = false
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
    document.querySelector(".line").style.width = "0";
})
