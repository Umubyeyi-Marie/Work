
const reverse = str => str.split('').reverse().join('');
const capitalize = str => str.toUpperCase();

// Compose function
const compose = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

// Create a function to reverse and capitalize
const reverseAndCapitalize = compose(capitalize, reverse);
console.log(reverseAndCapitalize("ariane")); 