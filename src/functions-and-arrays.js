// Iteration #1: Find the maximum - done
function maxOfTwoNumbers(a,b) {
  if (a > b) {
    return a;
  }
  else if (a < b) {
    return b;
  }
  else {
    return a;
  }
}

let biggestNum = maxOfTwoNumbers(2,3);
console.log ("The biggest number is", biggestNum);



// Iteration #2: Find longest word - done
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(someArray) {
  if (someArray.length == 0) {
      return null;
  }
  else if (someArray.length == 1) {
      return someArray[0];
  }
  else {
    let winnerLength = 0;
    let winnerIndex = 0;
    
    for (let i = 0; i < someArray.length; i++) {
      if (someArray[i].length > winnerLength) {
        winnerIndex = i;
        winnerLength = someArray[i].length;
      }
    }

    return someArray[winnerIndex];
  }
}

let longestWord = findLongestWord (words);
console.log ("The longest word is", longestWord);


// Iteration #3: Calculate the sum - done
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(myArray) {
  if (myArray.length == 0) {return 0;}
  else {
    let mySum = 0;
    for (i = 0; i < myArray.length; i++) {
      mySum += myArray[i];
    }
    return mySum;
  }
}

let numbersSum = sumNumbers (numbers);
console.log (numbersSum);

// Iteration #3.1 Bonus: - done
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10, ];

function sum(myArray) {
  if (myArray.length == 0) {return 0;}
  else {
    let mySum = 0;
    for (i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "number") {
        mySum += myArray[i];
      }
      else if (typeof myArray[i] === "string") {
        mySum += myArray[i].length;
      }
      else if (typeof myArray[i] === "boolean") {
        if (myArray[i] === true) {
        mySum += 1;}
      }
      else {throw new Error('Exception message');} 
    }
    return mySum;
  }
}

const mixedSum = sum(mixedArr);
console.log (mixedSum);



// Iteration #4: Calculate the average - done
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

/*numbersSum = sumNumbers (numbersAvg); // if i wanna use the function already iterated
console.log (numbersSum);*/

function averageNumbers(myArray) {
  if (myArray.length === 0) {
    return null;
  }
  else {
    let anotherSum = 0;
    for (i = 0; i < myArray.length; i++){
      anotherSum += myArray[i];
    }
    
    let avgNumber = anotherSum/myArray.length;
    return avgNumber;
  }


}

const avg41 = averageNumbers (numbersAvg);
console.log(`The average is ${avg41}.`);


// Level 2: Array of strings - done
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(myArray) {
  if (myArray.length === 0) {
    return null;
  }
  else {
    let anotherSum = 0;
    for (i = 0; i < myArray.length; i++){
      anotherSum += myArray[i].length;
    }
    
    let avgNumber = anotherSum/myArray.length;
    return avgNumber;
  }
  
}

const avg42 = averageWordLength (wordsArr);
console.log(`The average is ${avg42}.`);

// Bonus - Iteration #4.1 - done
function avg(myArray) {
  if (myArray.length === 0) {
    return null;
  }
  else {
    let mySum = 0;
    for (i = 0; i < myArray.length; i++) {
      if (typeof myArray[i] === "number") {
        mySum += myArray[i];
      }
      else if (typeof myArray[i] === "string") {
        mySum += myArray[i].length;
      }
      else if (typeof myArray[i] === "boolean") {
        if (myArray[i] === true) {
        mySum += 1;}
      }
      else {throw new Error('Exception message');} 
    }
    return mySum/myArray.length;
  }
  
}

const avg43 = avg (mixedArr);
console.log(`The average is ${avg43}.`);

// Iteration #5: Unique arrays - done
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

function uniquifyArray(someArray) {
  if (someArray.length == 0) { 
    return null;
  }
  else if (someArray.length == 1) { //if it has one word returns it the same
    return someArray;
  }
    
  else { //array has more than 1 word
    let uniqueArray = someArray; // the array i want to return (unique); i initiliased with the first word
    let i = 0;

    while (i < uniqueArray.length) {
      if (uniqueArray.includes(uniqueArray[i],i+1) == true) {
        uniqueArray.splice(uniqueArray.indexOf(uniqueArray[i], i+1), 1);
      }
      else {i++;}
    }
     
    return uniqueArray;
  }  
}

let newUniqueArray = uniquifyArray(wordsUnique);
console.log (newUniqueArray);


// Iteration #6: Find elements - done
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
const wordToBeFound = "subset";

function doesWordExist(wordArray,wordSearched) {
  if (wordArray.length == 0) {
    return null;
  }
  else if (wordArray.length == 1 && wordArray[0] == wordSearched)
  {
    return true;
  }
  else {
    if (wordArray.includes(wordSearched)) {return true;}
    else {return false};
  }
}

console.log(doesWordExist(wordsFind,wordToBeFound));



// Iteration #7: Count repetition - done
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
const wordToFind = `banana`;

function howManyTimes(wArray,wSearched) {
  if (wArray.length == 0) {
    return 0;
  }
  else {
    let numberCount = 0;

    let i = 0;
    while (i < wArray.length) {
      if (wArray.includes(wSearched,i+1) == true) {
        wArray.splice(wArray.indexOf(wSearched, i+1), 1);
        numberCount++;
      }
      else {i++;}
    }
    
    return numberCount;
  }
}

const countNo = howManyTimes(wordsCount,wordToFind);
console.log(countNo);





// Iteration #8: Bonus - done
const myMatrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct(matrix) {
  
  let maxArr = []; 
  let maxPr = 1; 
  
  for (let x = 0; x < matrix.length; x++) { //loop that checks adjacent numbers on the rows of the matrix
    let prArray = [];
    
    for (let y = 0; y < matrix.length; y++) {
      
      if (prArray.length < 3) {
        prArray.push(matrix[x][y]);
      }
        
      else if (prArray.length === 3) {
        prArray.push(matrix[x][y]);
        let newPr = prArray[0] * prArray[1] * prArray[2] * prArray[3];
        if (newPr > maxPr) {
          maxPr = newPr;
          for (i=0;i<4;i++){maxArr[i]=prArray[i];}
        }
        prArray.shift();
      }
    }
  }

    for (let y = 0; y < matrix.length; y++) { //loop that checks adjacent numbers on the columns of the matrix
    let prArray = [];
    
    for (let x = 0; x < matrix.length; x++) {
      
      if (prArray.length < 3) {
        prArray.push(matrix[x][y]);
      }
        
      else if (prArray.length === 3) {
        prArray.push(matrix[x][y]);
        let newPr = prArray[0] * prArray[1] * prArray[2] * prArray[3];
        if (newPr > maxPr) {
          maxPr = newPr;
          for (i=0;i<4;i++){maxArr[i]=prArray[i];}
        }
        prArray.shift();
      }
    }
  }

 /* let productObject = { //if to return two values
    maximumProduct : `${maxPr}`,
    maximumArray : `${maxArr}`,
  } */
  
  return maxPr;
}

console.log(greatestProduct(myMatrix));

//product of diagonals - done
princDiag = []; secondaryDiag = [];
for (i=0;i<matrix.length;i++){
  princDiag.push(matrix[i][i]); // principal diagonal
  secondaryDiag.push(matrix[i][matrix.length - i - 1]); // secondary diagonal
}

//just change with the previous code 



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
