const input = document.querySelector(`.input-box`);
//input.setAttribute(`readOnly`, `true`);

let calculation = [];

input.value = calculation;
//console.log(input);
console.log(calculation);
function calculate(numbers) {
  if (
    (numbers === `-` && calculation.length === 0) ||
    (numbers === `+` && calculation.length === 0) ||
    (numbers === `=` && calculation.length === 0) ||
    (numbers === `*` && calculation.length === 0) ||
    (numbers === `pow` && calculation.length === 0)
  ) {
    console.log(`dont do it`);
    console.log(calculation);
    console.log(typeof calculation);
  } // here i tried to solve this problem (2++) as you can see  we tried to + twice so we should`nt let this happen but i failed
  //else if (
  //(numbers === `-` && calculation !== true) ||
  //(numbers === `+` && calculation !== true) ||
  //(numbers === `=` && calculation !== true) ||
  //(numbers === `*` && calculation !== true) ||
  // (numbers === `pow` && calculation !== true)
  //) {
  // console.log(`dont do it`);
  // console.log(calculation);
  //console.log(typeof calculation);
  //}
  else {
    if (
      numbers === 1 ||
      numbers === 2 ||
      numbers === 3 ||
      numbers === 4 ||
      numbers === 5 ||
      numbers === 6 ||
      numbers === 7 ||
      numbers === 8 ||
      numbers === 9 ||
      numbers === 0 ||
      numbers === `.`
    ) {
      calculation = calculation + String(numbers);
      calculation = calculation;
      console.log(calculation === true);
      input.value = calculation;
      console.log(typeof calculation);
    } else if (
      numbers === `+` ||
      numbers === `-` ||
      numbers === `*` ||
      numbers === `/`
    ) {
      calculation = calculation + numbers;
      input.value = calculation;
      console.log(calculation);
    } else if (numbers === `=`) {
      calculation = eval(calculation);
      input.value = calculation;
      console.log(calculation);
    } else if (numbers === `reset`) {
      input.value = "";
      calculation = "";
      console.log(calculation);
    } else if (numbers === `pow2`) {
      calculation = Math.pow(calculation, 2);
      input.value = calculation;
      console.log(typeof calculation);
      console.log(calculation);
    }
  }
}
