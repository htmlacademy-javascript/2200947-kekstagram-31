const checkLengthString = (string = '', length = 1) => string.length <= length;

function checkPalindrome(str) {
  const newStr = str.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i <= newStr.length / 2; i++) {
    if (newStr[i] !== newStr.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

function extractNumbers(str) {
  let newStr = '';
  for (const letter of str) {
    if (!Number.isNaN(parseInt(letter, 10))) {
      newStr += letter;
    }
  }
  return +newStr !== 0 ? +newStr : NaN;
}

// // Строка короче 20 символов
// console.log(checkLengthString('проверяемая строка', 20)) // true
// // Длина строки ровно 18 символов
// console.log(checkLengthString('проверяемая строка', 18)) // true
// // Строка длиннее 10 символов
// console.log(checkLengthString('проверяемая строка', 10)) // false

// Строка является палиндромом
// console.log(checkPalindrome('топот')) // true
// Несмотря на разный регистр, тоже палиндром
// console.log(checkPalindrome('ДовОд')) // true
// Это не палиндром
// console.log(checkPalindrome('Кекс'))  // false
// Это палиндром
// console.log(checkPalindrome('Лёша на полке клопа нашёл ')) // true

// console.log(extractNumbers('2023 год'))            // 2023
// console.log(extractNumbers('ECMAScript 2022'))     // 2022
// console.log(extractNumbers('1 кефир, 0.5 батона')) // 105
// console.log(extractNumbers('агент 007'))          // 7
// console.log(extractNumbers('а я томат'))          // NaN
