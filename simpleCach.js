const cache = new Map();  

// Simple caching function that accepts a function and caches results
const simpleCache = (fn) => {
    return (...args) => {
        const key = args.join(','); 
        
    
        if (cache.has(key)) {
            console.log('Returning cached result for', args);
            return cache.get(key);
        }
        
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};


const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
};

// Wrapping the factorial function with caching
const memoizedFactorial = simpleCache(factorial);


console.log(memoizedFactorial(5)); 

