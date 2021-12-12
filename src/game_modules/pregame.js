import { Ship } from "./factory";

function playerSetup(player, left) {
    console.log(left.childNodes[3]);
    const playerBoard = player.gameboard;
    playerBoard.allShips = [];
    const arr = [2, 3, 3, 4, 5];
    for (let i = 0; i < arr.length; i++){
        let temp = generateCoordinates(arr[i]);
        const coordinate = temp[0];
        const horizontal = temp[1];
        playerBoard.placeShip(arr[i], coordinate, horizontal);
    }
    console.log(playerBoard);

    function generateCoordinates(len){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * (10 - len));
        let horizontal = Math.random() > 0.5;
        let flag = true;
        for (let i = y; i < y + len; i++){
            if (horizontal){
                if (playerBoard.board[x][i].hasShip !== ""){
                    flag = false;
                }
            } else {
                if (playerBoard.board[i][x].hasShip !== ""){
                    flag = false;
                }
            }
        }
        if (flag){
            return horizontal ? [[x, y], horizontal] : [[y, x], horizontal];
        } else {
            return generateCoordinates(len);
        }
    }
}

export {playerSetup};