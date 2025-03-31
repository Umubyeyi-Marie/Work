function longestWord(str) {
    return str
        .split(/\s+/) // Split by spaces
        .reduce((longest, current) => current.length > longest.length ? current : longest, "");
}

console.log(longestWord("Hello, this is a my new challenge in this month!")); // "JavaScript"
