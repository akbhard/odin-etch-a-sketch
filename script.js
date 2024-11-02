const container = document.querySelector(".container")

for(let i = 1; i <= 16; i++){
    const row = document.createElement("div")
    row.className = "row"
    container.appendChild(row)

    for (let j=1; j<= 16;j++) {
        const col = document.createElement("div")
        col.className = "col"
        row.appendChild(col)
    }
}

const hoverElements = document.querySelectorAll(".col")

hoverElements.forEach((element) => {
    element.addEventListener("mouseover", () => {
            let newColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
            element.style.backgroundColor = newColor;
    });
});


hoverElements.forEach((element) => {
    element.addEventListener("mouseout", () => {
        element.style.background = "antiquewhite";
    });
});

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    let input = prompt("Enter in a number from 1-100")

    if (input > 100){
        alert("You cannot go over 100")
    } else {
        alert(`${input} is ok`)
    }
})