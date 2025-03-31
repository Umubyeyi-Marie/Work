function sum(arr) {
    return arr.reduce((total, num) => total + num, 0); // Sum up all numbers in the array
}

let total =[1, 2, 3, 4];
console.log(sum(total));