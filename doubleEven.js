const isEven = num => num % 2 === 0;  // Checks if a number is even
const double = num => num * 2;        // Doubles a number

// Compose function (to combine multiple functions)
const compose = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

// Function that filters even numbers and then doubles them using compose
const doubleEvens = compose(
    arr => arr.map(double),     
    arr => arr.filter(isEven)  
);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(doubleEvens(numbers));  
