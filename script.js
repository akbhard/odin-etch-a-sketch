const container = document.querySelector(".container")

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
    let input = Number(prompt("Enter in a number from 1-100"))

    console.log(input)

    if (isNaN(input)) {
        alert("Enter in a number dumbass")
    } else if (input > 100){
        alert("You cannot go over 100")
    } else {
        const row = document.querySelectorAll(".row")
        row.forEach((element) =>{
            element.remove()
        })

        for(i=1;i<=input;i++){
            const row = document.createElement("div")
            row.className = "row"
            container.appendChild(row)

            for (let j=1; j<= input;j++) {
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
    }
})

