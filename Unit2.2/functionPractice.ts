function addTwo(input: number): number{
    console.log(input);
    return input + 2 

}

let firstNumber = 3;
let secondNumber = addTwo(firstNumber);
console.log(`First Number: ${firstNumber}, Second Number: ${secondNumber}`); 
console.log(firstNumber, secondNumber);
let thirdNumber = addTwo(50);
console.log(thirdNumber);
