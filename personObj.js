function fullName(person) {
    const { firstName, lastName } = person; 
    return `${firstName} ${lastName}`; 
}


const person1 = { firstName: 'Uwera', lastName: 'Aline' };
console.log(fullName(person1)); 
