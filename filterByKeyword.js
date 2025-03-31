const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Headphones", category: "Electronics" },
    { name: "Shoes", category: "Clothing" },
    { name: "Smartphone", category: "Electronics" }
];

const filterByCategory = (arr, category) => {
    return arr.filter(product => product.category === category);
};


console.log(filterByCategory(products, "Electronics"));
