'use strict';

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return 'Please try again';
  }
  const exampleWord = word.toLowerCase().replace(/[^a-zа-я0-9]/g, '');
  if (exampleWord === exampleWord.split('').reverse().join('')) {
    return `Слово ${exampleWord} есть палиндромом`;
  }
  return `Слово  ${exampleWord} не есть палиндромом`;
}

console.log(isPalindrom('level'));
console.log(isPalindrom('madam'));
console.log(isPalindrom('123'));
console.log(isPalindrom(333));
console.log(isPalindrom(NaN));
console.log(isPalindrom('finish'));
