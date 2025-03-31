function findMax(arr) {
    if (arr.length === 0) return 0; 
    return Math.max(...arr); 
}


console.log(findMax([1, 2, 3, 4])); 