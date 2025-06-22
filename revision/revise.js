// print hello world 20 times with its each count

// function helloWorld(n) {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello World - ", i);
//   }
// }

// helloWorld(20);

// function newLoop() {
//   for (let i = 3; i < 5; i++) {
//     console.log("Hello World");
//   }
// }

// newLoop();

// let arr = [10, 25, -5, 4, 8, 55];

// function printArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printArr(arr);

// write a function that searches for an element in an array and returns the index , if the element is not present then just return -1

// let arr = [4, 2, 0, 10, -2, 30];

// psuedo code
// search the element if present in the array by looping it with arr length
// compare it with the array element
// if present return the index else return -1

// function searchElement(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (element === arr[i]) {
//       console.log("index of the element " + element + " is " + i);
//     }
//   }
//   return -1;
// }

// console.log(searchElement(arr, 30));

// write a function that returns the number of -ve numbers in an array

// let arr = [2, -9, 17, 0, 1, -10, -4, 8];

// function negativeNum(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

// console.log(negativeNum(arr));

// write a function that returns the largest number in the array

// let arr = [5, 10, 7, 0, 8, 17, 1];

// psuedo code
// assume the largest number is -Infinity
// check if the current element is > then the current largest in the array
// if > then the current largest then update the current element as current largest
// then return current largest

// dry run
// currLargest | i | currElement > currLargest
// -Infinity   | 0 | -Infinity > 5 - true
// 5           | 1 | 5 > 10 - false
// 10          | 2 | 10 > 7 - true
// 10          | 3 | 10 > 0 - true
// 10          | 4 | 10 > 8 - true
// 10          | 5 | 10 > 17 -false
// 17          | 5 | 10 > 17 -false
// 17          | 5 | 17 > 1 - true

// 17 -------- loop breaks - largest

// function largest(arr) {
//   let currLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > currLargest) {
//       currLargest = arr[i];
//     }
//   }
//   return currLargest;
// }

// console.log(largest(arr));

// write a function to find the second largest number in the array - >

// corner cases
// if the array length is < 2 return null
// check for -ve integers in the array to validate the second largest
// array has duplicates

// psuedo code
// maintain 2 variables which has largest and secondLargest
// assume largest is -Infinity and secondLargest is -Infinity
// check if the largest > element then update the secondLargest as current largest

// dry run

// 2ndLargest  | i |    element > largest    | largest
// -Infinity   | 0 | 4 > -Infinity  true     |   4
// 4           | 1 |         9 > 4  true     |   9
// 4           | 2 |         9 > 0  true     |   9
// 4           | 3 |         9 > 2  true     |   9
// 7           | 4 |         9 > 7  true     |   9
// 7           | 5 |         9 > 1  true     |   9

// let arr = [4, 9, 0, 2, 7, 1]; // 7
// let arr1 = [10, 20, 20]; // 10
// let arr2 = [5]; // null
// let arr3 = [-5, -9, -33, -4]; // -5

// function secondLargest(arr) {
//   if (arr.length < 2) {
//     return null;
//   }
//   let largest = -Infinity;
//   let secondLargest = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] != largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(secondLargest(arr3));

// Guess ouput (loop  within loop )

// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 5; j++) {
//     console.log(i, j);
//   }
// }

// i < 5 | j < 5 | i | j
// 0 < 5 | 0 < 5 | 0 | 0
// ------| 1 < 5 | 0 | 1
// ------| 2 < 5 | 0 | 2
// ------| 3 < 5 | 0 | 3
// ------| 4 < 5 | 0 | 4
// ------| 5 < 5 | ------ j loop breaks , i loop starts
// 1 < 5 | 0 < 5 | 1 | 0
// ------| 1 < 5 | 1 | 1
// ------| 2 < 5 | 1 | 2
// ------| 3 < 5 | 1 | 3
// ------| 4 < 5 | 1 | 4
// ------| 5 < 5 | ------ j loop breaks , i loop starts
// 2 < 5 | 0 < 5 | 2 | 0
// ------| 1 < 5 | 2 | 1
// ------| 2 < 5 | 2 | 2
// ------| 3 < 5 | 2 | 3
// ------| 4 < 5 | 2 | 4
// ------| 5 < 5 | ------ j loop breaks , i loop starts

// same process until i becomes 5 and final loop ends.
// i = 0 ; j * 5
// i = 1 ; j * 5
// i = 2 ; j * 5
// i = 3 ; j * 5
// i = 4 ; j * 5
// code * 25 times

// Example - 2

// for (let i = 0 ; i < 3; i++) {
//     for (let j = 0; j < i ; j++) {
//         console.log(i,j);
//     }
// }

// dry run

// i < 3 | j < i | i | j
// 0 < 3 | 0 < 0 | --|-- loop breaks
// 1 < 3 | 0 < 1 | 1 | 0
// 1 < 3 | 1 < 1 | --| -- loop breaks
// 2 < 3 | 0 < 2 | 2 | 0
// 2 < 3 | 1 < 2 | 2 | 1
// 2 < 3 | 2 < 2 | --| -- loop breaks
// 3 < 3 | -------------- loop breaks

// console
// 1 0
// 2 0
// 2 1

// Example 3
// for (let i = 0; i < 5; i++) {
//   for (j = 0; j <= i; j++) {
//     console.log(i, j);
//   }
// }

// dry run
// i < 5 | j <= i | i | j
// 0 < 5 | 0 <= 0 | 0 | 0
// 0 < 5 | 1 <= 0 | --| -- loop breaks
// 1 < 5 | 0 <= 0 | 0 | 0
// 1 < 5 | 1 <= 1 | 1 | 1
// 1 < 5 | 2 <= 1 | --| -- loop breaks
// same process

// console
// i | j
// 0 | 0
// 1 | 0
// 1 | 1
// 2 | 0
// 2 | 1
// 2 | 2
// 3 | 0
// 3 | 1
// 3 | 2
// 3 | 3
// 4 | 0
// 4 | 1
// 4 | 1
// 4 | 2
// 4 | 3
// 4 | 4
// ------ loop breaks

// // Example 4
// for (let i = 0; i < 3; i++){
//     for (j = i ; j > 0 ; j --){
//         console.log(i,j)
//     }
// }

// dry run
// i < 3 | j > 0 | i | j
// 0 < 3 | 0 > 0 | --| -- loop breaks
// 1 < 3 | 1 > 0 | 1 | 1
// 1 < 3 | 0 > 0 | --| -- loop breaks
// 2 < 3 | 2 > 0 | 2 | 2
// 2 < 3 | 1 > 0 | 2 | 1
// 2 < 3 | 0 > 0 | --| -- loop breaks
// 3 < 3 | -------------- loop breaks

// console
// i | j
// 1 | 1
// 2 | 2
// 2 | 1

// expanded logic
// when i = 1 and 1 < 3 true->
// j = 1 -> 1 > 0 true ->
// j-- -> 0 > 0 false --- loop breaks
// i++
// when i = 2 and 2 < 3 true ->
// j = 2   -> 2 > 0 true ->
// j-- -> j = 1 > 0 true ->
// j-- -> j = 0 > 0 false -- loop breaks

// Example 5
// for (let i = 0; i < 3; i++) {
//   for (let j = i; j >= 0; j--) {
//     console.log(i, j);
//   }
// }

// dry run
// i < 3 | j >= 0 | i | j
// 0 < 3 | 0 >= 0 | 0 | 0
// 0 < 3 |-1 >= 0 | --| -- loop breaks
// 1 < 3 | 1 >= 0 | 1 | 1
// 1 < 3 | 0 >= 0 | 1 | 0
// 1 < 3 |-1 > =0 | --| -- loop breaks
// 2 < 3 | 2 >= 0 | 2 | 2
// 2 < 3 | 1 >= 0 | 2 | 1
// 2 < 3 | 0 >= 0 | 2 | 0
// 2 < 3 |-1 >= 0 | --| -- loop breaks
// 3 < 3 | --------------- loop breaks

// console
// i | j
// 0 | 0
// 1 | 1
// 1 | 0
// 2 | 2
// 2 | 1
// 2 | 0

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

// dry run
// i > 0 | j < i | i | j
// 5 > 0 | 0 < 5 | 5 | 0
// 5 > 0 | 1 < 5 | 5 | 1
// 5 > 0 | 2 < 5 | 5 | 2
// 5 > 0 | 3 < 5 | 5 | 3
// 5 > 0 | 4 < 5 | 5 | 4
// 5 > 0 | 5 < 5 | --| -- loop breaks
// then i--
// 4 > 0 ---- same process

// console
// i | j
// 5 | 0 - 4
// 4 | 0 - 3
// 3 | 0 - 2
// 2 | 0 - 1
// 1 | 0
