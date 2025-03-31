function average(arr) {
    if (arr.length === 0) return 0; 
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]; 
    }
    return total / arr.length; 
}
console.log(average([1, 2, 3, 4])); 