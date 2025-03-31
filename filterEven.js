function filterEven(arr) {

  return arr.filter(num => num % 2 !== 0); 
}

let result =[1,2,3,4,5,6,7,8]
console.log(filterEven(result));