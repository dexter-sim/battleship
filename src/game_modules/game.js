function game(player, com){
    const message = document.getElementById("message");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const play = document.getElementById("play");
    gameEnd();
    message.textContent = "Click on the enemy's grid to fire upon their ships.";

    for (let i = 0; i < right.childNodes.length; i++){
        const row = right.childNodes[i];
        for (let j = 0; j < row.childNodes.length; j++){
            let box = row.childNodes[j];
            if (!com.gameboard.board[i][j].isShot){
                box.addEventListener("click", helper)
            }

            function helper(){
                if (com.gameboard.board[i][j].hasShip !== ""){
                    box.style.backgroundColor = "lightgreen";
                } else {
                    box.style.backgroundColor = "red";
                }
                const allSunk = com.gameboard.receiveAttack([i, j]);
                darkenComColor();
                if (allSunk){
                    message.textContent = "You won! All enemy ships sunk.";
                    gameEnd();
                }
                box.removeEventListener("click", helper);
                comAttack();
            }
        }
    }

    function comAttack(){
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        if (player.gameboard.board[x][y].isShot){
            comAttack();
        } else {
            const playerLost = player.gameboard.receiveAttack([x, y]);
            if (player.gameboard.board[x][y].hasShip !== ""){
                left.childNodes[x].childNodes[y].style.backgroundColor = "lightgreen";
            } else {
                left.childNodes[x].childNodes[y].style.backgroundColor = "red";
            }
            darkenPlayerColor();
            if (playerLost){
                message.textContent = "You Lost! All your ships sunk.";
                gameEnd();
            }
        }
    }

    function darkenComColor() {
        const arr = com.gameboard.allShips;
        for (let pos = 0; pos < arr.length; pos++){
            const ship = arr[pos];
            if (ship.sunk){
                for (let i = 0; i < right.childNodes.length; i++){
                    const row = right.childNodes[i];
                    for (let j = 0; j < row.childNodes.length; j++){
                        if (com.gameboard.board[i][j].hasShip === pos){
                            const box = row.childNodes[j];
                            box.style.backgroundColor = "green";
                        }                        
                    }
                }
            }
        }
    }

    function darkenPlayerColor() {
        const arr = player.gameboard.allShips;
        for (let pos = 0; pos < arr.length; pos++){
            const ship = arr[pos];
            if (ship.sunk){
                for (let i = 0; i < left.childNodes.length; i++){
                    const row = left.childNodes[i];
                    for (let j = 0; j < row.childNodes.length; j++){
                        if (player.gameboard.board[i][j].hasShip === pos){
                            const box = row.childNodes[j];
                            box.style.backgroundColor = "green";
                        }                        
                    }
                }
            }
        }
    }

    function gameEnd() {
        for (let i = 0; i < right.childNodes.length; i++){
            const row = right.childNodes[i];
            for (let j = 0; j < row.childNodes.length; j++){
                const box = row.childNodes[j];
                box.outerHTML = box.outerHTML;
            }
        }
    }
}

export {game};