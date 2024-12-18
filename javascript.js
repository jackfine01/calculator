const calc = {
    numF: '',
    numL: '',
    operator: null
}

//functions for calculations

function add(num1, num2){
    return num1+num2;
};
function subtract(num1, num2){
    return num1-num2;
};
function multiply(num1, num2){
    return num1*num2;
};
function divide(num1, num2){
    return num1/num2;
};
function operate(num1, num2, opr){
    if(opr == '+'){
        let num = add(num1,num2);
        return num;
    };
    if(opr == '-'){
        let num = subtract(num1,num2);
        return num;
    };
    if(opr == '*'){
        let num = multiply(num1,num2);
        return num;
    };
    if(opr == '/'){
        let num = divide(num1,num2);
        return num;
    };
};
function addNumF(str){
    calc.numF += str;
    console.log("adding " + str)
};
function addNumL(str){
    calc.numL += str;
};
function operatorChange(str){
    calc.operator = str;
};
function onClickNum(str){
    if(calc.operator === null){
        addNumF(str);
    };
    if(calc.operator != null){
        addNumL(str);
    };
};

//buttons

const btnOne = document.getElementById('one');
btnOne.addEventListener('click', () => {onClickNum('1')});
const btnTwo = document.getElementById('two');
btnOne.addEventListener('click', () => {onClickNum('2')});
const btnThree = document.getElementById('three');
btnOne.addEventListener('click', () => {onClickNum('3')});
const btnFour = document.getElementById('four');
btnOne.addEventListener('click', () => {onClickNum('4')});
const btnFive = document.getElementById('five');
btnOne.addEventListener('click', () => {onClickNum('5')});
const btnSix = document.getElementById('six');
btnOne.addEventListener('click', () => {onClickNum('6')});
const btnSeven = document.getElementById('seven');
btnOne.addEventListener('click', () => {onClickNum('7')});
const btnEight = document.getElementById('eight');
btnOne.addEventListener('click', () => {onClickNum('8')});
const btnNine = document.getElementById('nine');
btnOne.addEventListener('click', () => {onClickNum('9')});
const btnZero = document.getElementById('zero');
btnOne.addEventListener('click', () => {onClickNum('0')});