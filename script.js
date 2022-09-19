let number = "";
let total = "";

let operator_sign = "";
let new_number = "False";

// box_bottom is lower value in input box where input should appear
let box_bottom = document.querySelector(".input_bottom");

// box_top is upper value in input box where answer or stored values should appear
let box_top = document.querySelector(".input_top");

// num_button is accessing every number in calculator
let num_button = document.querySelectorAll(".button_num");

// operator_button is accessing +-x/ in calculator
let operator_button = document.querySelectorAll(".button_op");

// delete_button is accessing del in calculator
let delete_button = document.querySelector(".button_delete");

// clear_button is accessing clear in calculator
let clear_button = document.querySelector(".button_clear");

// equality_button is accessing = in calculator
let equality_button = document.querySelector(".button_eq");

// opAdd button is accessing + in calculator
let opAdd = document.querySelector("#add");

// opSubtract button is accessing - in calculator
let opSubtract = document.querySelector("#subtract");

// opMultiply button is accessing x in calculator
let opMultiply = document.querySelector("#multiply");

// opDivide button is accessing / in calculator
let opDivide = document.querySelector("#divide");

// get all buttons except clear button
notClear_button = document.querySelectorAll(".not_clear");



// function takes in string ("9+9", splits into 9 & 9, and returns 18 (int))
function add(string) {

    let stringArray = string.split("+");
    firstNumber = Number(stringArray[0]);
    secondNumber = Number(stringArray[1]);
    
    let sum = firstNumber + secondNumber;
    // console.log(sum)
    return sum;
}

// function takes in string ("9-1", splits into 9 & 1, and returns 8 (int))
function subtract(string) {

    let stringArray = string.split("-");
    firstNumber = Number(stringArray[0]);
    secondNumber = Number(stringArray[1]);
    
    let difference = firstNumber - secondNumber;
    // console.log(difference)
    return difference;
}

// function that takes in string ("9x9", splits into 9 & 9, and returns 81 (int))
function multiply(string) {

    let stringArray = string.split("x");
    firstNumber = Number(stringArray[0]);
    secondNumber = Number(stringArray[1]);
    
    let product = firstNumber * secondNumber;
    // console.log(product)
    return product;
}

// function that takes in string ("9x9", splits into 9 & 9, and returns 1 (int))
function divide(string) {

    let stringArray = string.split("/");
    firstNumber = Number(stringArray[0]);
    secondNumber = Number(stringArray[1]);
    
    let quotient = firstNumber / secondNumber;
    // console.log(quotient)
    return quotient;
}

// Call operate function when press equal sign (=) or during second "+-x/"
function operate() {

    // "total" variable is complete value, need to change after call operate
        // ex. total = "9+9"

    // store result of operation in variable "result" and return the integer value
        // ex. total = "9+9" returns 18

    // Checks global variable operator_sign which changes upon click of the button
    if (operator_sign == "+") {
        let result = add(total);
        return result;
    }
    else if (operator_sign == "-") {
        let result = subtract(total);
        return result;
    }
    else if (operator_sign == "x") {
        let result = multiply(total);
        return result;
    }
    else if (operator_sign == "/") {
        let result = divide(total);
        return result;
    }
}

// function to work with clicking of numbers in calculator
function numbers() {

    // if the operator_sign value is a value not "", then clear line before adding??
    // return value?

    // go through all the number buttons 
    num_button.forEach((button) => {
        // add event listener so have output once click a number 
        console.log(button);
        button.addEventListener("click", function() {
            // text = console.log(button.textContent);

            // Case where (after equal sign and operator sign, work with
                // better names for "total" and "number")
            if (new_number == "True") {
                // Reset value at lower part of box
                box_bottom.textContent = "";

                number = "";
                number += button.textContent;
                total += button.textContent;

                box_bottom.textContent += button.textContent;
                
                // reset so can add on numbers instead of resetting
                new_number = "False";

                console.log("(new number): number is: " + number)
                console.log("(new number): total is: " + total)

            }
            else {

                number += button.textContent;
                total += button.textContent;

                box_bottom.textContent += button.textContent;

                console.log("(continue number): number is: " + number)
                console.log("(continue number): total is: " + total)
            }
        })
    })
}

// function to work with clicking of operators +-/x
function operators() {

    // return value ??

    // 2 cases for when first time press and second time when want to compute until =
    
    // work through nodelist to apply click event listener for all the operators
    operator_button.forEach((button) => {
        button.addEventListener("click", function() {
            // once click one of the buttons: +, -, /, x


            // change up body to be full if else statement??

            // if operator sign already has a value, continuing so need to compute
            if (operator_sign != "") {

                // case of dividng by 0, alert user and disable everything other than clear
                // Alo add to equal() function
                if (total.endsWith("/0")) {
                    console.log("error")
                    alert("Do not divide by 0!");
                }

                // if answer too long and has decimal, round the value
                // add to equal() function

                calc = String(operate());
                // answer with decimal too long 
                if (calc.indexOf(".") == 1 && calc.length > 15) {
                    // decide how many digits should be allowed?
                    calc = calc.substring(0, 11);
                }

                // set operator sign to be one of the values (starts at "")
                operator_sign = button.textContent;

                // ex. want (10 + 9 + ) -> "19+"
                box_top.textContent = calc + operator_sign;

                // ex. want (10 + 9 + ) -> 19
                box_bottom.textContent = calc;

                total = calc + operator_sign;
                number = calc;

                console.log("top text: " + calc + operator_sign)
                console.log("calc is: " + calc);
                // set total to be calc?


                new_number = "True";
                // number = "";
                console.log("new number: " + new_number)
            }
            else {
                // set operator sign to be one of the values (starts at "")
                operator_sign = button.textContent;

                // add operator sign so it becomes ("993+")
                // number += operator_sign;
                total += operator_sign;
                // after add operator sign, want ("99+") to be at top of box 
                box_top.textContent += (number + operator_sign);

                // Once press operator sign, change to true so next number button pressed
                // clears lower box and starts new number
                new_number = "True";
                // number = "";
            }
        })
    })
}

// Disable all other buttons other than clear after equals
// work with equals button when clicked
function equal() {

    equality_button.addEventListener("click", function() {

        // case of dividng by 0, alert user and disable everything other than clear
        // Alo add to equal() function
        if (total.endsWith("/0")) {
            console.log("error")
            alert("Do not divide by 0!");
        }

        // Pressing = before entering all of the numbers or an operator could cause problems!
        if (number == "" || operator_sign == "" || total.endsWith("+") || total.endsWith("-") || total.endsWith("x") || total.endsWith("/")) {

            console.log("error");
            alert("Put operator or number before =!")
            // return 0;
        }

        calc = String(operate());

        // answer with decimal too long 
        if (calc.indexOf(".") == 1 && calc.length > 15) {
            // decide how many digits should be allowed?
            calc = calc.substring(0, 11);
        }

        // ex. want "10+9="
        box_top.textContent = total + "=";
         
        // ex. want "19"
        box_bottom.textContent = calc;

        // Disable all buttons not clear so have to clear and restart after complete equation
        notClear_button.forEach((button) => {
            button.disabled = true;
        })
        console.log(operate()); 
    })
}

// work with clear button in calculator to clear all values and reset input
function clear() {

    // reset new_number
    clear_button.addEventListener("click", function() {

        notClear_button.forEach((button) => {
            button.disabled = false;
        })

        box_top.textContent = "";
        box_bottom.textContent = "";

        number = "";
        total = "";
        operator_sign = "";
        
        new_number = "False";
    })
}

// works with delete button in calculator to delete latest value input by user
    // applies to both numbers and operator sign
function del() {

    // delete latest input by user
    delete_button.addEventListener("click", function() {
        
   

        console.log("number: " + number);
        console.log("total: " + total);


        totalLastIndex = total.substring(total.length - 1);
        // Trying to delete operator and reset
        if (totalLastIndex == "+" || totalLastIndex == "-" || totalLastIndex == "x" || totalLastIndex == "/") {
            
            total = total.substring(0, total.length - 1);
            new_number = "False";
            operator_sign = "";

            console.log("new total: " + total);


            // box_bottom.textContent = ;
            box_top.textContent = total;

            // return value?
        }
        else if (number != "") {

            number = number.substring(0, total.length - 1);
            total = total.substring(0, total.length - 1);


            console.log("new number: " + number);
            console.log("new total: " + total);

            box_bottom.textContent = number;
            if (box_top.textContent != "") {
                box_top.textContent = total;
            }
        }
        // if number value is empty, do nothing?
        else if (number == "") {
            console.log("no number")
            return 0;
        }
    })
}

function keyboard() {

    document.addEventListener("keydown", function(event) {

        console.log("event key: " + event.key)

        // click any number button on calculator when press number on keyboard
        for (let i = 0; i < 10; i++) {
            if (event.key === `${i}`) {
                console.log(i);
                document.querySelector(`#num${i}`).click(); 
            }
        }

        // click any operation (+-/x) button on calculator when press operation on keyboard
        let opArray = ["+", "-", "x", "/"];
        let opJsArray = [opAdd, opSubtract, opMultiply, opDivide];

        let opArrayLength = opArray.length;
        for (let i = 0; i < opArrayLength; i++) {
            if (event.key === `${opArray[i]}`) {
                console.log(opArray[i]);
                opJsArray[i].click();
            }
        }

        // click = button on calculator when press = on keyboard
        if (event.key === "=") {
            console.log("equals");
            equality_button.click();
        }

        // click clear button on calculator when press Space on keybaord
        if (event.key === " ") {
            console.log("clear");
            clear_button.click();
        }

        // click delete button on calculator when press Backspace on keyboard
        if (event.key === "Backspace") {
            console.log("delete");
            delete_button.click();
        }
    })
}


document.addEventListener("DOMContentLoaded", function() {
  
    operate();
    numbers();
    operators();
    equal();
    clear();
    del();
    keyboard();
})

// work with demical?