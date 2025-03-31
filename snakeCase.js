function toSnakeCase(str) {
    return str
        .replace(/([a-z])([A-Z])/g, '$1_$2') // Convert camelCase to snake_case
        .replace(/\s+/g, '_') // Replace spaces with underscores
        .toLowerCase(); // Convert everything to lowercase
}
console.log(toSnakeCase('ticket_Card'));
