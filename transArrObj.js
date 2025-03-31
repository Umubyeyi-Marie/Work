const students = [
    { name: "Alice", grade: 60 },
    { name: "Bob", grade: 40 },
    { name: "Charlie", grade: 80 },
    { name: "David", grade: 45 }
];

const addStatus = students => {
    return students.map(student => {
        return {
            ...student,  
            status: student.grade > 50 ? "Pass" : "Fail"  
        };
    });
};

console.log(addStatus(students));
