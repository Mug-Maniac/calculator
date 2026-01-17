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

        switch (button.dataset.operator) {
            case "+":
                runningTotal += parseFloat(buffer)
                previousOperator = "+"
                buffer = "0"
                resetDisplay()
                break;
        
            case "-":
                runningTotal += parseFloat(buffer)
                previousOperator = "-"
                buffer = "0"
                resetDisplay()
                break;

            case "*":
                runningTotal += parseFloat(buffer)
                previousOperator = "*"
                buffer = "0"
                resetDisplay()
                break;

            case "/":
                runningTotal += parseFloat(buffer)
                previousOperator = "/"
                buffer = "0"
                resetDisplay()
                break;

            case "%":
                buffer = (parseFloat(buffer)/100).toString()
                display.textContent = buffer
                break;
        }
    })
});

clearBtn.addEventListener("click", () => {
    resetEverything()
    resetDisplay()
})

deleteBtn.addEventListener("click", () => {
    if (buffer.length === 1) {
        buffer = 0
    } else {
        buffer = buffer.slice(0, -1)
    }
    display.textContent = buffer
})

equalsBtn.addEventListener("click", () => {
    let total = 0

    switch (previousOperator) {
        case "+":
            total = runningTotal + parseFloat(buffer)
            break;
    
        case "-":
            total = runningTotal - parseFloat(buffer)
            break;

        case "*":
            total = runningTotal * parseFloat(buffer)
            break;

        case "/":
            total = runningTotal / parseFloat(buffer)
            break;
    }

    display.textContent = total
    buffer = total.toString()
    runningTotal = 0
    previousOperator = null
})

//helper methods
function resetDisplay() {
    display.textContent = "0"
}

function resetEverything() {
    previousOperator = null
    runningTotal = 0
}