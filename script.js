
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const equals = document.querySelector("#equals");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const times = document.querySelector("#times");
const division = document.querySelector("#division");
const sign = document.querySelector("#sign");
const AC = document.querySelector("#AC");
const decimal = document.querySelector("#decimal");
const percent = document.querySelector("#percent");
const screen = document.querySelector("#screen");
let a = "0", b;
let bool = false;
let num1 = 0, num2 = 0, operator = "0";
screen.textContent = a;
one.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "1"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "1";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
two.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "2"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "2";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
three.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "3"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "3";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
four.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "4"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "4";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
five.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "5"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "5";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
six.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "6"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "6";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
seven.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "7"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "7";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
eight.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "8"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "8";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
nine.addEventListener("click", ()=> {
    if(a !== "0"){
        b = "9"
        a = a.concat(b);
        screen.textContent = a;
    }
    else{
    a = "9";
    screen.textContent = a;
    }
    if(operator === "0"){
        num1 = parseFloat(a);
        }else{
            num2 = parseFloat(a);
        }
})
AC.addEventListener("click", ()=> {
    a = "0";
    b = "0";
    operator = "0";
    screen.textContent = a;
    num1 = 0;
    num2 = 0;
    bool = false;
})
plus.addEventListener("click", () => {
    operator = "+";
    screen.textContent = operator;
    a = "0";
    b = "0";
})
minus.addEventListener("click", () => {
    operator = "-";
    screen.textContent = operator;
    a = "0";
    b = "0";
})
times.addEventListener("click", () => {
    operator = "*";
    screen.textContent = operator;
    a = "0";
    b = "0";
})
division.addEventListener("click", () => {
    operator = "/";
    screen.textContent = operator;
    a = "0";
    b = "0";
})
equals.addEventListener("click", () => {
    if(operator === "+"){
        num1 += num2;
    }else if(operator === "-"){
        num1 -= num2;
    }else if(operator === "*"){
        num1 *= num2;
    }else {
        num1 = num1 / num2;
    }
    a = num1.toString();
    screen.textContent = a;
    num2 = 0;
    operator = "0";
    bool = true
    
})
