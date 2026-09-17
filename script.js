const num1 = document.getElementById("num1");
const select = document.getElementById("operator");
const num2 = document.getElementById("num2");
const button = document.getElementById("calculateBtn");
const h1 = document.getElementById("result");

button.addEventListener("click", function () {
     const inputValue1 = Number(num1.value);
     const inputValue2 = Number(num2.value);
     const operator = select.value;

     
    let result;

    if (operator === "+"){
      result = inputValue1 + inputValue2;
    }

    if (operator === "-"){
      result = inputValue1 - inputValue2;
    }   
    if (operator === "*"){
      result = inputValue1 * inputValue2;
    }
    if (operator === "/"){
      result = inputValue1 / inputValue2;
    }

    h1.textContent = result;
  
});

