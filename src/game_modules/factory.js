class Ship {
    constructor(length, shipId) {
        this.length = length;
        this.shipId = shipId;
        this.hits = [];
        this.sunk = false;
    }

    hit(coordinates) {
        this.hits.push(coordinates);
    }

    isSunk() {
        this.sunk = this.hits.length == this.length;
        return this.sunk;
    }
}

class Gameboard {
    constructor() {
        this.board = [];
        this.allShips = [];
        this.createBoard();
    }

    createBoard() {
        for (let i = 0; i < 10; i++){
            this.board[i] = [];
            for (let j = 0; j < 10; j++){
                this.board[i][j] = {
                    hasShip: "",
                    isShot: false,
                };
            }
        }
    }

    placeShip(length, coordinates, horizontal) {
        const pos = this.allShips.length;
        console.log(pos);
        const ship = new Ship(length, pos);
        this.allShips.push(ship);
        let row = coordinates[0];
        let col = coordinates[1];
        for (let i = 0; i < length; i++){
            if (horizontal){
                this.board[row][col + i].hasShip = pos;
            } else {
                this.board[row + i][col].hasShip = pos;
            }
        }
    }

    receiveAttack(coordinates){
        let row = coordinates[0];
        let col = coordinates[1];
        if (!this.board[row][col].isShot){
            this.board[row][col].isShot = true;
            if (this.board[row][col].hasShip !== ""){
                const ship = this.allShips[this.board[row][col].hasShip];
                ship.hit(coordinates);
                if (ship.isSunk()){
                    console.log("ship sunk");
                }
            }
        }
        return this.checkAllSunk();
    }

    checkAllSunk(){
        for (let i = 0; i < this.allShips.length; i++){
            if (!this.allShips[i].sunk){
                return false;
            }
        }
        return true;
    }
}

class Player {
    constructor() {
        this.gameboard = new Gameboard();
        this.movesMade = [];
    }

    attack(enemy, row, col){
        enemy.gameboard.receiveAttack([row, col]);
    }
}

export {Player, Gameboard, Ship};