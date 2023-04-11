// Q1 Closure function in function

function addNos(num1) {
    return function(num2) {
      return num1 + num2;
    }
  }; 
  
let  add5 = addNos(5);
let showresult= document.getElementById("result");

// document.write(add5(40));

console.log(add5(20)); 
console.log(add5(40)); 

