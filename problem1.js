/*
    Question 1: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
                Find the sum of all the multiples of 3 or 5 below 1000.
*/
function getSumOfNumbersBelow(number){
    // Returns the sum of all numbers greater than 0 and less than 'number'
    let sum = 0;
    for (let currentNumber = number - 1; currentNumber > 0; currentNumber--){
        if (isMultipleOf3or5(currentNumber)){
            sum = sum + currentNumber;
        }
    }
    return sum;
}

function isMultipleOf3or5(number){
    return (number % 3 === 0) || (number % 5 === 0)
}

console.log(getSumOfNumbersBelow(10), "Should be 23")
console.log(getSumOfNumbersBelow(1000), "Should be 233168")