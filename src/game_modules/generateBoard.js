function generateBoard(){
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    left.textContent = "";
    right.textContent = "";

    for (let i = 0; i < 8; i++){
        const row1 = document.createElement("div");
        row1.className = "row";
        const row2 = document.createElement("div");
        row2.className = "row";
        for (let j = 0; j < 8; j++){
            const box1 = document.createElement("div");
            box1.className = "box";
            const box2 = document.createElement("div");
            box2.className = "box";
            row1.appendChild(box1);
            row2.appendChild(box2);
        }
        left.appendChild(row1);
        right.appendChild(row2);
    }
}

export {generateBoard};