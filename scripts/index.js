let sketchBoard = document.getElementById("sketch-container");
const colours = ["87A878", "B0BC98", "D9DAD5", "CAE2BC", "DBF9B8"];
let resetButton = document.getElementById('reset-button');
let popup = document.getElementById("popup-container");
let background = document.getElementById("popup-background");
let confirmButton = document.getElementById("confirm-button");
let cancelButton = document.getElementById("return-button");
let numberInput = document.getElementById("number-input");

resetButton.addEventListener("click", () => {
    popup.style.display = "flex";
    background.style.display = "block";
});

background.addEventListener("click", () => {
    background.style.display = "none";
    popup.style.display = "none";
});

cancelButton.addEventListener("click", () => {
    background.style.display = "none";
    popup.style.display = "none";
});

confirmButton.addEventListener("click", () =>{
    let number = numberInput.value;
    if (number > 0 && number <= 100) {
        let cellElements = document.getElementsByClassName("sketch-col");
        count = 0;
        while(cellElements.length > 0) {
            cellElements[0].remove();
        }
    }
    else {
        alert("Size must be between 1 and 100 inclusive!");
        return;
    }
    for(let i = 0; i < number; i++ ) {
        sketchBoard.insertAdjacentHTML("beforeend", `<div class="sketch-col col-${i}"></div>`);
        for (let x = 0; x < number; x++) {
            let currentCol = document.querySelector(`.col-${i}`);
            currentCol.insertAdjacentHTML("beforeend", 
                `
                    <div class="sketch-cell"></div>
                `);
        } 
    }
    
    let squareSize = 640 / number;
    let cellElements = document.getElementsByClassName("sketch-cell");
    for(let i = 0; i < cellElements.length; i++) {
        cellElements[i].style.width = squareSize + "px";
        cellElements[i].style.height = squareSize + "px";
    }
    addListeners();
    
});

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

addListeners();

function addListeners() {
    let cellElements = sketchBoard.getElementsByClassName("sketch-cell");
    for(let i = 0 ; i < cellElements.length; i++) {
        cellElements[i].addEventListener("mouseenter", () => {
       
            let currentCell = event.target;
            let randNo = Math.floor(Math.random() * 5);
    
            if(currentCell.style.backgroundColor == "") {
                currentCell.style.backgroundColor = "#" + colours[randNo];  
            }
    
            if(currentCell.style.opacity == "") {
                currentCell.style.opacity = "20%";
            }
            else if (currentCell.style.opacity != 1) {
                let currentOpacity = Number(currentCell.style.opacity);
                currentCell.style.opacity = currentOpacity + 0.2;
            }
    
        });
    };
}





