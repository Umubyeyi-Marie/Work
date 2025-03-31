 function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed
  }
  console.log(isPalindrome('nun'));
  console.log(isPalindrome('papa'));
  
  