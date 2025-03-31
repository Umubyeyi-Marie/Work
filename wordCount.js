function wordCount(str) {
    // Use a regular expression to match words (sequences of non-space characters)
    const words = str.split(' ').filter(word => word.length > 0);
    
    
    return words.length;
  }
  console.log(wordCount("Utumatwizera"));
  