function add(num1, num2){
    return num1+num2;
}
function subtract(num1, num2){
    return num1-num2;
}
function multiply(num1, num2){
    return num1*num2;
}
function divide(num1, num2){
    return num1/num2;
}
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

}