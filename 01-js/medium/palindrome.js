/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function preProcess(str){
  let newStr = "";
  for(let ch of str)
  {
    if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) newStr += ch;
  }
  return newStr;
}
function isPalindrome(str) {
  str = preProcess(str.toLowerCase());
  return [...str].join("") === [...str].reverse().join("");
}

module.exports = isPalindrome;
