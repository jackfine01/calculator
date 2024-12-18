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
    console.log("adding " + str)
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
function operateFull(){
    let num1 = Number (calc.numF);
    let num2 = Number (calc.numL);

    calc.numF = operate( num1, num2 , calc.operator );
    calc.numL = "";
    calc.operator = null;
    console.log(calc)
};



//Header Mechanics

const header = document.getElementById('headerArea');
function dispNum(){

    if(calc.operator!=null){
    let num1 = calc.numF;
    let num2 = calc.numL;
    let opr = calc.operator;
    let str = num1+opr+num2;
    return str;
    };
    if(calc.operator===null){
        let str = calc.numF;
        return str;
    };
}

//buttons for numbers

const btnOne = document.getElementById('one');
btnOne.addEventListener('click', () => {
    onClickNum('1');
    header.textContent = dispNum();
});

const btnTwo = document.getElementById('two');
btnTwo.addEventListener('click', () => {
    onClickNum('2');
    header.textContent = dispNum();
});

const btnThree = document.getElementById('three');
btnThree.addEventListener('click', () => {
    onClickNum('3');
    header.textContent = dispNum();
});

const btnFour = document.getElementById('four');
btnFour.addEventListener('click', () => {
    onClickNum('4');
    header.textContent = dispNum();
});

const btnFive = document.getElementById('five');
btnFive.addEventListener('click', () => {
    onClickNum('5');
    header.textContent = dispNum();
});

const btnSix = document.getElementById('six');
btnSix.addEventListener('click', () => {
    onClickNum('6');
    header.textContent = dispNum();
});

const btnSeven = document.getElementById('seven');
btnSeven.addEventListener('click', () => {
    onClickNum('7');
    header.textContent = dispNum();
});

const btnEight = document.getElementById('eight');
btnEight.addEventListener('click', () => {
    onClickNum('8');
    header.textContent = dispNum();
});

const btnNine = document.getElementById('nine');
btnNine.addEventListener('click', () => {
    onClickNum('9');
    header.textContent = dispNum();
});

const btnZero = document.getElementById('zero');
btnZero.addEventListener('click', () => {
    onClickNum('0');
    header.textContent = dispNum();
});

//buttons for operators

const btnAdd = document.getElementById('add');
btnAdd.addEventListener('click', () => {
    operatorChange('+');
    header.textContent = dispNum();
});

const btnSub = document.getElementById('subtract');
btnSub.addEventListener('click', () => {
    operatorChange('-');
    header.textContent = dispNum();
});

const btnMul = document.getElementById('multiply');
btnMul.addEventListener('click', () => {
    operatorChange('*');
    header.textContent = dispNum();
});

const btnDiv = document.getElementById('divide');
btnDiv.addEventListener('click', () => {
    operatorChange('/');
    header.textContent = dispNum();
});

const btnClr = document.getElementById('clear');
btnClr.addEventListener('click', () => {
    operatorChange(null);
    calc.numF = '';
    calc.numL = '';
    header.textContent = dispNum();
});

const btnQual = document.getElementById('equal');
btnQual.addEventListener('click', () => {
    operateFull()
    header.textContent = dispNum();
});

