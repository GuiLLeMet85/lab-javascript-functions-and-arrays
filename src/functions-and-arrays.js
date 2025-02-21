// Iteration #1: Find the maximum

//Option 1

function maxOfTwoNumbers(num1, num2) {
    return Math.max(num1, num2);
}

console.log(maxOfTwoNumbers(9,15));


//Option 2

function maxOfTwoNumbers(num1,num2) {
    if (num1 > num2) {
      return num1;
    }
    else {
      return num2;
    }
}

console.log(maxOfTwoNumbers(9,15));



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestString(arr) {
  return arr.sort(function(a, b) {return b.length - a.length})[0];
}
console.log(findLongestString(words))




// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  
  return arr.reduce(function(a, b){ return a + b; });
  
}
console.log(sumNumbers(numbers))




// Iteration #3.1 Bonus:
/*#### Bonus - Iteration #3.1: A generic `sum()` function

**The goal: Learn how to refactor your code.** :muscle:

In the iteration 3, you created a function that returns the sum of an array of numbers. 
But what if we wanted to know how much is the sum of the length of all of the words in an 
array? What if we wanted to add _boolean_ values to the mix? We wouldn't be able to use the 
same function as above, or better saying, we would have to _tweak_ it a little bit so that 
it can be reused no matter what is in the array that is passed as argument when 
function `sumNumbers()` is called.

Here we are applying a concept we call **polymorphism**, that is, dealing with a functions' 
input independently of the types they are passed as.

Let's implement the function `sum()` that calculates the sum for array filled with (_almost_) 
any type of data. Note that strings should have their length added to the total, and boolean 
values should be coerced into their corresponding numeric values. Check the tests for more 
details.

You can use the following array to test your solution:

```javascript
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

// should return: 57

*/
const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function sum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
    } else if (typeof numbers[i] === "string") {
      sum += numbers[i].length;
    } else if (numbers[i] === true) {
      sum += 1;
    }
  }
    return sum
} 

console.log(sum(mixedArr));




// Iteration #4: Calculate the average

// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

// Option 1 - With decimals
function averageNumbers() {

  let suma =  numbers.reduce((a, b) => a + b, 0)

  return suma/arr.length;
}

console.log(averageNumbers(numbersAvg))


// Option 2 - Without decimals

function averageNumbers(arr) {

  let sum =  numbers.reduce((a, b) => a + b, 0)
  let avgWithDecimal = sum/arr.length;
   
   return avgWithDecimal.toFixed(0);
 }
 
 console.log(averageNumbers(numbersAvg))




// Level 2: Array of strings
/*Implement the function named `averageWordLength` that receives as a single argument 
an array of words and returns the average length of the words:

You can use the following array to test your solution: */
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(arr) { 

  let sum = 0;
  if (!arr.length) return null;

  for (let i=0; i < wordsArr.length; i++) {
    sum += wordsArr[i].length;
  }
  
return sum / wordsArr.length
  
}

console.log(averageWordLength(wordsArr))


// Bonus - Iteration #4.1

/* 
Create function `avg(arr)` that receives any mixed array and calculates average. 
Consider as mixed array an array filled with numbers and/or strings and/or booleans. 
We are following a similar logic to the one applied on the bonus iteration 4.1. :wink:
*/

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10];

function avg(arr) {
  return arr.map(item => {
    if (typeof item === 'number') {
        return item;
    } else if(typeof item === 'boolean') {
        return Number(item);
    } else if (typeof item === 'string'){
        return item.length
    }
  }).reduce((prev, current) => prev + current) / arr.length;
}






// Iteration #5: Unique arrays

/*Take the following array, remove the duplicates, and return a new array. 
You are more than likely going to want to check out the [`indexOf`]
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) Array method.
Do this in the form of a function `uniquifyArray` that receives an array of words as a argument.
You can use the following array to test your solution:*/


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

function uniquifyArray() {

  let newArray = [];
  if (!array.length) return null;
  for (let i=0; i<array.length; i++) {
  let word=array[i];
if(newArray.indexOf(word)<0) {

  newArray.push(array[i]);
} 
}
return newArray
}
console.log(uniquifyArray(wordsUnique));






// Iteration #6: Find elements


/*Let's create a simple array search.

Declare a function named `doesWordExist` that will take in an array of words as one argument, and a word to search
for as the other. Return `true` if it exists, otherwise, return `false`. **Don't** use `indexOf` for this one.*/
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arrayOfWords, theOtherWord) {

  let exist = false;

  if (!arrayOfWords.length) return null;
  for (let i=0; i < arrayOfWords.length; i++ ) {
      if(arrayOfWords[i] === theOtherWord) {
        exist = true;
      }
  }

  return exist;

}

console.log(doesWordExist(wordsFind))



// Iteration #7: Count repetition

/*Declare a function named `howManyTimes` that will take in an array of words as the first 
argument, and a word to search for as the second argument. The function will return the 
number of times that word appears in the array.*/

const wordsCount = [
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter',
  'machine'
];

function howManyTimes(arrayOfWords, wordToSearch ) {

  let count = 0;
  for (let i=0; i < arrayOfWords; i++ ){

  if (arrayOfWords[i] === wordToSearch) {
    count ++;
  } 

}
  return count;

}

console.log (howManyTimes(wordsCount))





// Iteration #8: Bonus

/* 
What is the greatest product of four adjacent numbers? We consider adjacent any four 
numbers that are next to each other horizontally or vertically.

For example, if we have a 5x5 Matrix like:

```bash
[ 1,  2, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1, 20, 3, 4, 5]
[ 1,  4, 3, 4, 5]
```

The greatest product will be the `20`x`20`x`20`x`4` = `32000`.

Declare a function named `greatestProduct(matrix)` to find it in the 20×20 grid below!


*/
const matrix = [
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

function greatestProduct() {





}


