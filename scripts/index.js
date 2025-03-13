let sketchBoard = document.getElementById("sketch-container");
const colours = ["87A878", "B0BC98", "D9DAD5", "CAE2BC", "DBF9B8"];

for(let i = 0; i < 16; i++) {

    sketchBoard.insertAdjacentHTML("beforeend", `<div class="sketch-col col-${i}"></div>`);
    for (let x = 0; x < 16; x++) {
        let currentCol = document.querySelector(`.col-${i}`);
        currentCol.insertAdjacentHTML("beforeend", 
            `
                <div class="sketch-cell"></div>
            `);
    } 
}

let cellElements = sketchBoard.getElementsByClassName("sketch-cell");
for(let i = 0 ; i < cellElements.length; i++) {
    cellElements[i].addEventListener("mouseenter", () => {
   
        let currentCell = event.target;
        let randNo = Math.floor(Math.random() * 5);

        if(currentCell.style.backgroundColor == "") {
            currentCell.style.backgroundColor = "#" + colours[randNo];  
        }

        if(currentCell.style.opacity == "") {
            currentCell.style.opacity = "10%";
        }
        else if (currentCell.style.opacity != 1) {
            let currentOpacity = Number(currentCell.style.opacity);
            currentCell.style.opacity = currentOpacity + 0.1;
        }

    });
};


/*
sketchBoard.addEventListener("mouseenter", () => {
    console.log("hovering");
    let currentCell = event.target;
    currentCell.style.backgroundColor = "black";
});
*/