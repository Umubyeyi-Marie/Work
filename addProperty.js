const person = {
    name: 'John',
    age: 20
};

// Function to add a new person object as a property within the existing person object
function addProperty(obj, key, newPerson) {
    obj[key] = newPerson; 
    return obj; 
}
const newPerson = { name: 'Alice', age: 30}

console.log(addProperty(person, 'friend', newPerson));
