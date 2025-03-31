function hasProperty(obj, key) {
    return obj.hasOwnProperty(key); 
}

const person = {
    name: 'John',
    age: 20
};

console.log(hasProperty(person, 'name'));