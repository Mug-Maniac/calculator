//html references
const display = document.querySelector(".display")

const clearBtn = document.querySelector("#clear")
const deleteBtn = document.querySelector("#delete")
const equalsBtn = document.querySelector("#equals")

const numberButtons = document.querySelectorAll(".button-num")
const operatorButtons = document.querySelectorAll(".button-operator")

//calculator variabels
let runningTotal = 0
let buffer = "0"
let previousOperator

//event listeners
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (buffer.includes(".") && button.dataset.num === ".") {
            return
        } 
        
        if (display.textContent === "0") {
            if (button.dataset.num === ".") {
                buffer = "0" + button.dataset.num
            } else {
                buffer = button.dataset.num
            }
        } else {
            buffer += button.dataset.num
        }
        
        display.textContent = buffer
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (previousOperator !== null)
        {
            resetEverything()
        }

        switch (button.dataset.operator) {
            case "+":
                runningTotal += parseInt(buffer)
                previousOperator = "+"
                resetDisplay()
                break;
        
            case "-":
                runningTotal += parseInt(buffer)
                previousOperator = "-"
                resetDisplay()
                break;

            case "*":
                runningTotal += parseInt(buffer)
                previousOperator = "*"
                resetDisplay()
                break;

            case "/":
                runningTotal += parseInt(buffer)
                previousOperator = "/"
                resetDisplay()
                break;

            // case "%":
            //     console.log(button.dataset.operator)
            //     break;
        }
    })
});

clearBtn.addEventListener("click", () => {
    resetEverything()
    resetDisplay()
})

deleteBtn.addEventListener("click", () => {

})

equalsBtn.addEventListener("click", () => {
    let total = 0

    switch (previousOperator) {
        case "+":
            total = runningTotal + parseInt(buffer)
            break;
    
        case "-":
            total = runningTotal - parseInt(buffer)
            break;

        case "*":
            total = runningTotal * parseInt(buffer)
            break;

        case "/":
            total = runningTotal / parseInt(buffer)
            break;
    }

    display.textContent = total
    resetEverything()
})

//helper methods
function resetDisplay() {
    display.textContent = "0"
}

function resetEverything() {
    previousOperator = null
    runningTotal = 0
}