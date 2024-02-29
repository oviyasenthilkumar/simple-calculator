let num1 = [];
let num2 = [];
let firstSet;
let secondSet;
let stage = 0;
let operation;
let result;

let display_cnt = document.getElementById("display-cnt");
function getNumber(num){
    console.log("stage : " + stage);
    if(stage == 0 || stage == 1){
         num1.push(num);
         stage = 1;
         firstSet =Number(num1.join(''));
         display_cnt.value = firstSet;
    }else if(stage == 2){
        num2.push(num);
        secondSet = Number(num2.join(""));
        display_cnt.value = firstSet + operation + secondSet;
    }
    console.log(num);
}
function getOperator(opp){
    stage = 2;
    operation = opp;
    display_cnt.value = firstSet + operation;
}

function equalOperator(){
    if(operation === "^"){
        result = firstSet ** secondSet;
        display_cnt.value = result;
    }else  if(operation === "+"){
        result = firstSet + secondSet;
        display_cnt.value = result;
    }else  if(operation === "-"){
        result = firstSet - secondSet;
        display_cnt.value = result;
    }else  if(operation === "/"){
        result = firstSet / secondSet;
        display_cnt.value = result;
    }else  if(operation === "*"){
        result = firstSet * secondSet;
        display_cnt.value = result;
    }
   
}
function clrDisplay(){
    display_cnt.value = 0;
    firstSet = 0;
    secondSet= 0;
    stage = 0;
    operation = 0;
    result = 0;
    num1=[];
    num2=[];
 }
