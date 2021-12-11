function game(player, com){
    const message = document.getElementById("message");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    let turn = 0;

    for (let i = 0; i < right.childNodes.length; i++){
        const row = right.childNodes[i];
        for (let j = 0; j < row.childNodes.length; j++){
            const box = row.childNodes[j];
            if (!com.gameboard.board[i][j].isShot){
                box.addEventListener("click", () => {
                    message.textContent = "Turn " + ++turn;
                    if (com.gameboard.board[i][j].hasShip !== ""){
                        box.style.backgroundColor = "green";
                    } else {
                        box.style.backgroundColor = "red";
                    }
                    const allSunk = com.gameboard.receiveAttack([i, j]);
                    if (allSunk){
                        message.textContent = "You Won";
                        gameEnd();
                    }
                    comAttack();
                    box.outerHTML = box.outerHTML;                  
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
            left.childNodes[x].childNodes[y].style.backgroundColor = "blue";
            if (playerLost){
                message.textContent = "You Lost";
                gameEnd();
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