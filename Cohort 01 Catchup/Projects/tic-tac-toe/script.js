class TicTacToe {
    constructor() {
        this.tiles = document.querySelectorAll('.tiles');
        this.status = document.querySelector('.winner');
        this.restartGame = document.querySelector('#playAgain');
        this.strikethrough = document.querySelector('#strike');
        this.currentPlayer = 'X';
        this.currentCondition
        this.winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
        ]
        this.clicked = ['', '', '', '', '', '', '', '', '']
        this.isRunning = false;
        this.initialize()
    }

    // initialize a game
    initialize() {
        // event listener on the tiles
        this.tiles.forEach( tile => tile.addEventListener('click', event => this.cellClicked(event)) );
        // event listeners on play again
        this.restartGame.addEventListener('click', () => this.resetGame());
        // toggle isRunning
        this.isRunning = true;
        console.log('is it working')
    }

    // clicked cells
    cellClicked(event) {
        // declare a variable that stores clicked cell
        const clickedIndex = event.target.getAttribute('data-index')
        // conditional to check if isRunning is false or the clicked array has an empty slot for that index ELSE update the cell content
        if(this.clicked[clickedIndex] !== '' || !this.isRunning) {
            return;
        } else {
            this.clicked[clickedIndex] = this.currentPlayer;
            this.tiles[clickedIndex].innerText = this.currentPlayer;
        }
        // check win conditions
        this.checkWin();
        console.log(this.clicked)
    }

    // change the player
    changePlayer() {
        //change input from x to o
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }

    // check winner
    checkWin() {
        //declare a boolean win checker
        let win = false;
        //let currentCondition;
        //for loop to loop through win conditions
        for(let i=0; i<this.winConditions.length; i++) {
            //current player value equals win 
            const a = this.clicked[this.winConditions[i][0]]
            const b = this.clicked[this.winConditions[i][1]]
            const c = this.clicked[this.winConditions[i][2]]

            if (a === '' || b === '' || c === '') {
                continue;
            }

            if (a===b && b===c) {
                this.currentCondition = i
                win = true;
                break;
            }
        }
        // conditional to check win conditions
        if (win) {
            this.status.innerText = `${this.currentPlayer}`;
            this.isRunning = false;
            //add strikethrough
            // `strike-[index]`
            this.strikethrough.classList.toggle(`strike`)
            this.strikethrough.classList.toggle(`strike-${this.currentCondition}`)
        } else if (!this.clicked.includes('') && !win) {
            this.status.innerText = 'Draw!'
            this.isRunning = false
        } else {
            this.changePlayer();
        }
    }
    // reset game
    resetGame() {
        this.currentPlayer = 'X'
        this.isRunning = true
        this.clicked = ['', '', '', '', '', '', '', '', '']
        this.status.innerText = '';
        this.strikethrough.classList.toggle(`strike`)
        this.strikethrough.classList.toggle(`strike-${this.currentCondition}`)
        this.tiles.forEach(tile => tile.innerText = '')
    }
}

const tictactoe = new TicTacToe();