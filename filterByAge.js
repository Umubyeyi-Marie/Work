function filterByAge(people, minAge) {
    return people.filter(person => person.age >= minAge); 
}


const people = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 17 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 15 }
];

console.log(filterByAge(people, 18)); 