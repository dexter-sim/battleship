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

    let horizontal = true;

    function helper(count){
        removeListeners();
        if (count === arr.length){
            displayBoard(player);
            message.textContent = "Press play to begin.";
            play.style.display = "inline";
        } else {
            const length = arr[count];
            left.addEventListener("contextmenu", menuFn);

            function menuFn(e) {
                e.preventDefault();
                if (horizontal) {
                    horizontal = false;
                } else {
                    horizontal = true;
                }
                removeListeners();
                left.removeEventListener("contextmenu", menuFn);
                helper(count);
            }
            
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
                                left.removeEventListener("contextmenu", menuFn);
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
                                for (let k = i; k < i + length; k++){
                                    left.childNodes[k].childNodes[j].style.backgroundColor = "grey";
                                }
                                left.removeEventListener("contextmenu", menuFn);
                                helper(count + 1);
                            });
                        }
                    }
                }
            }
            
            if (horizontal){
                h();
            } else {
                v();
            }
            
        }
    }
    helper(0);
}

export {manual};