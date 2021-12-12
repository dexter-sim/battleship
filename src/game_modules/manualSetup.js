import { displayBoard } from "./displayBoard";

function manual(player) {
    const play = document.getElementById("play");
    const left = document.getElementById("left");
    const message = document.getElementById("message");
    const playerBoard = player.gameboard;
    const arr = [5, 4, 3, 3, 2];
    function removeListeners() {
        for (let i = 0; i < left.childNodes.length; i++){
            const row = left.childNodes[i]
            for (let j = 0; j < row.childNodes.length; j++){
                const box = row.childNodes[j];
                box.outerHTML = box.outerHTML;
            }
        }
        displayBoard(player);
    }

    function helper(count){
        removeListeners();
        if (count === arr.length){
            displayBoard(player);
            message.textContent = "Play";
            play.style.display = "inline";
        } else {
            const length = arr[count];
            let horizontal = true;
            left.addEventListener("contextmenu", e => {
                e.preventDefault();
                horizontal = !horizontal;
                removeListeners();
                if (horizontal){
                    h();
                } else {
                    v();
                }
            });
            
            function h(){
                removeListeners();
                for (let i = 0; i < left.childNodes.length; i++){
                    const row = left.childNodes[i];
                    for (let j = 0; j < row.childNodes.length; j++){
                        const box = row.childNodes[j];
                        let flag = true;
                        for (let k = j; k < j + length; k++){
                            if (k >= 10 || player.gameboard.board[i][k].hasShip !== ""){
                                flag = false;
                                break;
                            }
                        }
                        if (flag) {
                            box.addEventListener("click", () => {
                                playerBoard.placeShip(length, [i, j], horizontal);
                                for (let k = j; k < j + length; k++){
                                    row.childNodes[k].style.backgroundColor = "grey";
                                }
                                helper(count + 1);
                            });
                            box.addEventListener("mouseover", () => {
                                for (let k = j; k < j + length; k++){
                                    row.childNodes[k].style.backgroundColor = "lightgrey";
                                }
                            });
                            box.addEventListener("mouseout", () => {
                                for (let k = j; k < j + length; k++){
                                    row.childNodes[k].style.backgroundColor = "white";
                                }
                                displayBoard(player);
                            });
                        }
                    }
                }
            }

            function v(){
                removeListeners();
                for (let i = 0; i < left.childNodes.length; i++){
                    const row = left.childNodes[i];
                    for (let j = 0; j < row.childNodes.length; j++){
                        const box = row.childNodes[j];
                        let flag = true;
                        for (let k = i; k < i + length; k++){
                            if (k >= 10 || player.gameboard.board[k][j].hasShip !== ""){
                                flag = false;
                                break;
                            }
                        }
                        if (flag) {
                            box.addEventListener("mouseover", () => {
                                for (let k = i; k < i + length; k++){
                                    left.childNodes[k].childNodes[j].style.backgroundColor = "lightgrey";
                                }
                            });
                            box.addEventListener("mouseout", () => {
                                for (let k = i; k < i + length; k++){
                                    left.childNodes[k].childNodes[j].style.backgroundColor = "white";
                                }
                                displayBoard(player);
                            });
                            box.addEventListener("click", () => {
                                playerBoard.placeShip(length, [i, j], horizontal);
                                for (let k = j; k < j + length; k++){
                                    row.childNodes[k].style.backgroundColor = "grey";
                                }
                                helper(count + 1);
                            });
                        }
                    }
                }
            }
            h();
            
        }
    }
    helper(0);
}

export {manual};