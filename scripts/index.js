let sketchBoard = document.getElementById("sketch-container");

for(let i = 0; i < 16; i++) {
    console.log("run");
    sketchBoard.insertAdjacentHTML("beforeend", `<div class="sketch-col col-${i}"></div>`);
    for (let x = 0; x < 16; x++) {
        let currentCol = document.querySelector(`.col-${i}`);
        currentCol.insertAdjacentHTML("beforeend", 
            `
                <div class="sketch-cell"></div>
            `);
    }
   
}