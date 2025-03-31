function findMin(arr) {
    if (arr.length === 0) return 0; 
    return Math.min(...arr); 
}

let number= [1,2,3,4]
console.log(findMin(number)); 