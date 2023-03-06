// #1 Takes an array that has duplicates and only pushes the number ONCE

// const arr = [1, 3, 3, 4, 6, 7, 7]

// const loop = () => {
//   let noDupes = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//       noDupes.push(arr[i])
//     }
//   }

//   console.log(noDupes)
// }

// loop()

// #2 roman numeral converter

// let romanToInt = (roman) => {
//   let sym = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   }
//   let result = 0

//   for (let i = 0; i < roman.length; i++) {
//     const cur = sym[roman[i]]
//     const next = sym[roman[i + 1]]

//     if (cur < next) {
//       result += next - cur
//       i++
//     } else {
//       result += cur
//     }
//   }

//   console.log(result)
// }

// romanToInt('V')

// #3 Palindrome number

// const isPalindrome = (num) => {
//   let reverse = parseInt(num.toString().split('').reverse().join(''))

//   if (num === reverse) {
//     console.log('is a palindrome')
//   } else {
//     console.log('is not palindorme')
//   }
// }

// isPalindrome(565)

// #4 Calculate the number of letters in the last word of a string

const stringToArray = (str) => {
  let words = str.split(' ')

  let last = words[words.length - 1]

  console.log(last.length)
}

stringToArray('Hello World')
