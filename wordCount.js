function wordCount(str) {
    // Use a regular expression to match words (sequences of non-space characters)
    const words = str.split(' ').filter(word => word.length > 0);
    
    // Return the number of words
    return words.length;
  }
  console.log(wordCount("Utumatwizera"));
  