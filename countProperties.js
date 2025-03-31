function countProperties(obj) {
    return Object.keys(obj).length; 
}

const person = {
    name: 'John',
    age: 20,
    gender: 'male'
};

console.log(countProperties(person)); 