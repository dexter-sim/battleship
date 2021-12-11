function displayBoard(player){
    const left = document.getElementById("left");
    for (let i = 0; i < 8; i++){
        const row = left.childNodes[i];
        for (let j = 0; j < 8; j++){
            const box = row.childNodes[j];
            if (player.gameboard.board[i][j].hasShip !== ""){
                box.style.backgroundColor = "grey";
            }
        }
    }
}

export {displayBoard};