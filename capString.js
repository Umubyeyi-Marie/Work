function capitalize(str) {
    if (str.length === 0) return str; // Return the string as is if it's empty
    return str[0].toUpperCase() + str.slice(1); // Capitalize the first letter and concatenate with the rest of the string
  }
  
  console.log(capitalize("bienvenue"));
