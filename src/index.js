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

const randomizeButton = document.createElement("button");
randomizeButton.id = "randomize";
randomizeButton.className = "randomize";
randomizeButton.textContent = "Randomize";
randomizeButton.addEventListener("click", () => {
    play.style.display = "inline";
    mainFunction();
});
main.appendChild(randomizeButton);

const resetButton = document.createElement("button");
resetButton.id = "reset";
resetButton.className = "reset";
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    play.style.display = "none";
    randomizeButton.style.display = "inline";
    manualSetup();
});
main.appendChild(resetButton);

const play = document.createElement("button");
play.id = "play";
play.className = "play";
play.textContent = "Play";
play.style.display = "none";
main.appendChild(play);
play.addEventListener("click", () => {
    play.style.display = "none";
    randomizeButton.style.display = "none";
    game(player, com);
});

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

let player = new Player();
let com = new Player();

function mainFunction() {
    message.textContent = "Play";
    player = new Player();
    com = new Player();

    generateBoard();
    playerSetup(player, left);
    playerSetup(com, right);
    displayBoard(player);
}

function manualSetup() {
    message.textContent = "Place Your Battleships.";
    player = new Player();
    com = new Player();
    generateBoard();

    manual(player);
    playerSetup(com, right);
    displayBoard(player);
}

manualSetup();