// Iteration #1: Find the maximum
const maxOfTwoNumbers = (num1, num2) => {
  if (num1 > num2) {
    return num1
  } else if (num2 > num1) {
    return num2
  } else {
    return num1;
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

const findLongestWord = (array) => {

  if (array.length === 0) {
    return null
  } else if (array.length === 1) {
    return array[0]
  } else {
    let longestWord = '';
    array.forEach(function (word) {
      if (word.length > longestWord.length) {
        longestWord = word
      }
    })
    return longestWord
  }
}
findLongestWord(array)

// Iteration #3

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {

  if (array.length === 0) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  } else {
    let sum = 0;

    array.forEach(function (number) {
      sum += number
    })
    return sum
  }
}

sumNumbers(numbers);

//Iteration #4
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {

  if (array.length === 0) {
    return null;
  } else if (array.length === 1) {
    return array[0];
  } else {
    let sum2 = 0;
    array.forEach(function (number) {
      sum2 += number
    })
    const average = sum2 / numbersAvg.length
    return average
  }
}
averageNumbers(numbersAvg)

//Iteration #4.2 
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(array) {
  if (array.length === 0) {
    return null;
  } else {
    let wordAvg = 0;
    array.forEach(function (word) {
      wordAvg += word.length
    })
    const avg = wordAvg / array.length
    return avg
  }
}
averageWordLength(wordsArr)

//Iteration #5
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(array) {
  if (array.length === 0) {
    return null
  } else {
    let newWordArray = [];
    array.forEach(function (duplicate) {
      if (newWordArray.includes(duplicate)) {
      } else {
        newWordArray.push(duplicate)
      }
    })
    return newWordArray
  }
}
uniquifyArray(wordsUnique)

// Iteration #6

const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(array, word) {
  if (array.length === 0) {
    return null
  } else {
    let exists = ''
    array.forEach(function () {
      if (array.includes(word)) {
        exists = true
      } else {
        exists = false;
      }
    })
    return exists
  }
}
doesWordExist(wordsFind, 'machine');

// Iteration #7
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes (array, word) {
  let count = 0;
 array.forEach(function (duplicate) {
  if (duplicate === word) {
    count++;
  }
 }) 
 return count
}
howManyTimes(wordsCount, 'matter')