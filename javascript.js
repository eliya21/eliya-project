let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;
let timer;

function handleCellClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        clearTimeout(timer); // Reset the timer for the current move
        console.log("CellClick()")

        gameBoard[index] = currentPlayer;
        var cell = document.querySelector('.cell:nth-child(' + (index + 1) + ')');
        
        cell.textContent = currentPlayer;

        cell.classList.add(currentPlayer+"-bg");
        //cell.classList.contains();
        //cell.classList.remove('green-bg');
        if (checkWinner()) {
            announceWinner(currentPlayer);
            gameActive = false;
        } else if (gameBoard.every(cell => cell !== '')) {
            alert('It\'s a tie!');
            gameActive = false;
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            startTurnTimer();
        }
    }
}

function startTurnTimer() {
    console.log("startTurnTimer()")
    timer = setTimeout(() => {
        switchPlayer();
        announceWinner(currentPlayer + ' (Timeout)');
        gameActive = false;
    }, 30000); // 30 seconds
}

function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function announceWinner(player) {
    alert(player + ' wins!');
}

function checkWinner() {
    console.log("checkWinner()")
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        // Add your custom rule here, for example:
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return (
            gameBoard[a] !== '' &&
            gameBoard[a] === gameBoard[b] &&
            gameBoard[a] === gameBoard[c]
        );
    });
}
function reastart() {
    debugger;
    console.log("restart()")
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    clearTimeout(timer);
    var cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        const c = cells[i];
        c.textContent = '';
c.className="cell"
    }
}



// Start the turn timer for the first move
startTurnTimer();
