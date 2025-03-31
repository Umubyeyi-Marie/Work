function findIndex(arr, value) {
    let index = -1; 
    arr.forEach((item, i) => {
        if (item === value && index === -1) { 
            index = i; 
        }
    });
    return index; 
}


console.log(findIndex([1, 2, 3, 4, 5], 3)); 