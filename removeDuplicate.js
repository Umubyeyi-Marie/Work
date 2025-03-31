/*function removeDuplicates(arr) {
    return [...new Set(arr)]; 

}
let cat =[1, 2, 3, 4, 1, 2, 5];
console.log(removeDuplicates(cat)); */

function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);

}
let cat =[1, 2, 3, 4, 1, 2, 5];
console.log(removeDuplicates(cat)); 