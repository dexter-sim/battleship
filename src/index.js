require("./style.css");
import { playerSetup } from "./game_modules/pregame";
import { generateBoard } from "./game_modules/generateBoard";
import { Player, Gameboard, Ship } from "./game_modules/factory";
import { displayBoard } from "./game_modules/displayBoard";
import { game } from "./game_modules/game";
import { manual } from "./game_modules/manualSetup";

const main = document.getElementById("main");
const gametitle = document.createElement("h1");
gametitle.textContent = "Battleship";
main.appendChild(gametitle);

const headers = document.createElement("headers");
headers.id = "headers";
const leftText = document.createElement("p");
leftText.textContent = "Your Board";
headers.appendChild(leftText);
const rightText = document.createElement("p");
rightText.textContent = "Enemy's Board";
headers.appendChild(rightText);
main.appendChild(headers);

const content = document.createElement("div");
content.id = "content";
content.className = "content";
main.appendChild(content);

const randomizeButton = document.createElement("button");
randomizeButton.id = "randomize";
randomizeButton.className = "randomize";
randomizeButton.textContent = "Randomize";
randomizeButton.addEventListener("click", () => {
    play.disabled = false;
    play.style.cursor = "pointer";
    autoSetup();
});
main.appendChild(randomizeButton);

const play = document.createElement("button");
play.id = "play";
play.className = "play";
play.textContent = "Play";
play.disabled = true;
play.style.cursor = "not-allowed";
main.appendChild(play);
play.addEventListener("click", () => {
    play.style.cursor = "not-allowed";
    play.disabled = true;
    randomizeButton.style.cursor = "not-allowed";
    randomizeButton.disabled = true;
    game(player, com);
});

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.className = "reset";
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    play.style.cursor = "not-allowed";
    play.disabled = true;
    randomizeButton.style.cursor = "pointer";
    randomizeButton.disabled = false;
    manualSetup();
});
main.appendChild(resetButton);

const message = document.createElement("p");
message.id = "message";
message.className = "message";
message.textContent = "temp";
main.appendChild(message);

const info = document.createElement("p");
info.id = "info";
info.className = "message";
info.textContent = "Ship Piece [Size] : Carrier [5] | Battleship [4] | Destroyer [3] | Submarine [3] | Patrol Boat [2]";
main.appendChild(info);

const left = document.createElement("div");
left.className = "left"; 
left.id = "left";
content.appendChild(left);

const right = document.createElement("div");
right.className = "right"; 
right.id = "right";
content.appendChild(right);

let player = new Player();
let com = new Player();

function autoSetup() {
    message.textContent = "Press play to begin.";
    player = new Player();
    com = new Player();

    generateBoard();
    playerSetup(player);
    playerSetup(com);
    displayBoard(player);
}

function manualSetup() {
    message.textContent = "Place Your Battleships or Randomize. Right click in your grid to rotate ship.";
    player = new Player();
    com = new Player();

    generateBoard();
    manual(player);
    playerSetup(com);
    displayBoard(player);
}

manualSetup();