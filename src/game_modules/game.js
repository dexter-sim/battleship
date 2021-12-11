function game(player, com){
    const message = document.getElementById("message");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    for (let i = 0; i < right.childNodes.length; i++){
        const row = right.childNodes[i];
        for (let j = 0; j < row.childNodes.length; j++){
            const box = row.childNodes[j];
            if (!com.gameboard.board[i][j].isShot){
                box.addEventListener("click", () => {
                    if (com.gameboard.board[i][j].hasShip !== ""){
                        box.style.backgroundColor = "lightgreen";
                    } else {
                        box.style.backgroundColor = "red";
                    }
                    const allSunk = com.gameboard.receiveAttack([i, j]);
                    darkenComColor();
                    if (allSunk){
                        message.textContent = "You Won";
                        gameEnd();
                    }
                    box.outerHTML = box.outerHTML;                  
                    comAttack();
                })
            }
        }
    }

    function comAttack(){
        let x = Math.floor(Math.random() * 8);
        let y = Math.floor(Math.random() * 8);
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
                message.textContent = "You Lost";
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