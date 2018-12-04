let gameArray = [];
let player = 0;
const table = document.getElementById ('game-table');
const divs = document.querySelectorAll ('.cell');
const cats = document.getElementById ('player0');
const dogs = document.getElementById ('player1');
let win = 0;
let levels = 0;

function switchPl () {
    if (player === 0) {
        player = 1;
        dogs.classList.add ('active');
        cats.classList.remove ('active');
    } else {
        player = 0;
        cats.classList.add ('active');
        dogs.classList.remove ('active');
    }
}
const reStart = document.getElementById  ('new-game');
reStart.addEventListener ('click', function () {
    player = 0;
    gameArray = [];
    cats.classList.add ('active');
    dogs.classList.remove ('active');
        dogs.classList.remove ('active');
    for (let i = 0; i <9; i++) {
       divs[i].classList.remove ('cat');
       divs[i].classList.remove ('dog'); 
    };
    win = 0;
});


table.addEventListener ('click', function (e) {
    if (e.target.classList.contains ('cell')) {
    const temp = 0;
// check if a cell is empty
    if (e.target.classList.contains ("cat") || e.target.classList.contains ("dog")) {
        window.alert ("Try another cell")
    } else {
        // if cats play
        if (player === 0) {
            e.target.classList.add ('cat'); 
            gameArray[e.target.id] = 0;
            winner (player);
            if (win) {
                swal({
                    heightAuto: false,
                    position: 'top-start',
                    title: 'Congratulations! Cats win',
                    showConfirmButton: false,
                    timer: 4000
                  })
            };
            switchPl ();
            
        // if this is dogs
        } else {
            e.target.classList.add ('dog');
            gameArray[e.target.id] = 1;
            winner (player);
            if (win) {
                swal({
                    heightAuto: false,
                    position: 'top-end',
                    title: 'Congratulations! Dogs win',
                    showConfirmButton: false,
                    timer: 4000
                  })   
            };
            switchPl ();
            
        } 
    }


// tie condition
    win=0;
    checkArray ();
    if (gameArray.length === 9 && !win) {
        swal({
            heightAuto: false,
            title: 'End of game. Nobody win',
            showConfirmButton: false,
            timer: 4000
          });
    }
}
});
//for empty cells
function checkArray () {
    for (let j = 0; j < gameArray.length; j++) {
        if (gameArray[j] === undefined) {
            win = 1;
            return;
        }
    }
}
// long check for winners
function winner (b) {
if (gameArray.length >= 3) {
    if ((gameArray[0] === b && gameArray[1] === b && gameArray[2] ===b) ||
        (gameArray[3] === b && gameArray[4] === b && gameArray[5] ===b) ||
        (gameArray[6] === b && gameArray[7] === b && gameArray[8] ===b) ||
        (gameArray[0] === b && gameArray[3] === b && gameArray[6] ===b) ||
        (gameArray[1] === b && gameArray[4] === b && gameArray[7] ===b) ||
        (gameArray[2] === b && gameArray[5] === b && gameArray[8] ===b) ||
        (gameArray[0] === b && gameArray[4] === b && gameArray[8] ===b) ||
        (gameArray[2] === b && gameArray[4] === b && gameArray[6] ===b))
    {
        win = 1;
    } else {
        win = 0;
    }



} 
}
