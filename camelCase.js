function toCamelCase(str) {
    return str
        .split(/[-_\s]+/) // Split by hyphens, underscores, or spaces
        .map((word, index) =>
            index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase()
        )
        .join('');
}

console.log(toCamelCase("care_giver")); 
