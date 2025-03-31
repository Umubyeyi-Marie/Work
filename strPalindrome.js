 function isPalindrome(str){
    const reversed = str.split('').reverse().join('');
    return str === reversed
  }
  console.log(isPalindrome('nun'));// return true
  console.log(isPalindrome('papa'));// return false
  
  