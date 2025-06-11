// write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [4, 2, 0, 10, 8, 30];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);

// psuedo code
// -> check if the element is present in the array
// -> check by looping it with the entire array length
// -> compare element with the array element
// -> if element === array element, return the index
// -> if you finish the ENTIRE loop without finding it, THEN return -1

function searchElement(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      console.log("Index of " + element + " is " + i);
    }
  }
  return -1;
}

console.log(searchElement(arr, 3));

// write a function that returns the count of  -ve numbers in the array

let array = [2, -9, 17, 0, 1, -19, -4, 8];

function countNegatives(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element < 0) {
      count = count + 1;
    }
  }
  return count;
}

console.log(countNegatives(array));

// write a function that returns the largest number in the array

let elements = [5, 0, 10, 8, 17, 1];

function findLargest(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

console.log(findLargest(elements));
