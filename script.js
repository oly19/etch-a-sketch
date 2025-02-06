const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const lineContainer = document.createElement("div");
    lineContainer.classList = "line-container";
    container.append(lineContainer);

    for (let j = 0; j < 16; j++) {
        const childDiv = document.createElement("div");
        childDiv.classList = "child-div";
        lineContainer.append(childDiv);
    }
}

function mouseOverEffect() {
    const childDiv = document.querySelectorAll(".child-div");
    for (let div of childDiv) {
        div.addEventListener("mouseover", () => div.style.backgroundColor = "red");
    }
}

mouseOverEffect()


function getGridLength() {
    let gridLength = prompt("Input grid size")
    let i = 0
    while (Number.isInteger(Number(gridLength)) != true || Number(gridLength) > 100) {
        gridLength = prompt("Input grid size");
    }
    return Number(gridLength)
}

function adjustGridSize(gridLength) {

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (let i = 0; i < gridLength; i++) {
        const lineContainer = document.createElement("div");
        lineContainer.classList = "line-container";
        lineContainer.style.height = 100/gridLength + "vh"
        container.append(lineContainer);
    
        for (let j = 0; j < gridLength; j++) {
            const childDiv = document.createElement("div");
            childDiv.classList = "child-div";
            childDiv.style.height = 100/gridLength + "vh";
            childDiv.style.width = 100/gridLength + "vw";
            lineContainer.append(childDiv);
        }
    }
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
    adjustGridSize(getGridLength());
    mouseOverEffect();
});