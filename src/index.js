require("./style.css");
import { playerSetup } from "./game_modules/pregame";
import { generateBoard } from "./game_modules/generateBoard";
import { Player, Gameboard, Ship } from "./game_modules/factory";
import { displayBoard } from "./game_modules/displayBoard";
import { game } from "./game_modules/game";

const main = document.getElementById("main");
const gametitle = document.createElement("h1");
gametitle.textContent = "Battleship";
main.appendChild(gametitle);

const headers = document.createElement("headers");
headers.id = "headers";
const leftText = document.createElement("div");
leftText.textContent = "Player";
headers.appendChild(leftText);
const rightText = document.createElement("div");
rightText.textContent = "Enemy";
headers.appendChild(rightText);
main.appendChild(headers);

const content = document.createElement("div");
content.id = "content";
content.className = "content";
main.appendChild(content);

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.className = "reset";
resetButton.textContent = "Reset";
resetButton.addEventListener("click", mainFunction);
main.appendChild(resetButton);

const message = document.createElement("p");
message.id = "message";
message.className = "message";
message.textContent = "temp";
main.appendChild(message);

const left = document.createElement("div");
left.className = "left"; 
left.id = "left";
content.appendChild(left);

const right = document.createElement("div");
right.className = "right"; 
right.id = "right";
content.appendChild(right);

function mainFunction() {
    message.textContent = "Click on the enemy's grid to fire upon their ships.";
    let player = new Player();
    let com = new Player();

    generateBoard();
    playerSetup(player, left);
    playerSetup(com, right);
    displayBoard(player);
    game(player, com);
}

mainFunction();