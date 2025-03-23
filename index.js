'use strict';

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return 'Please try again';
  }
  const exampleWord = word.toLowerCase().replace(/\W/g, '');
  return exampleWord === exampleWord.split('').reverse().join('');
}

console.log(isPalindrom('level'));
console.log(isPalindrom('madam'));
console.log(isPalindrom('123'));
console.log(isPalindrom(333));
console.log(isPalindrom(NaN));
console.log(isPalindrom('finish'));
