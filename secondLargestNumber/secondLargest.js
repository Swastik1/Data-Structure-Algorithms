// Find second largest number in an array

// let arr = [4, 9, 0, 2, 8, 7, 1];
let arr = [10, 20, 20];

function secondLargestNumber(arr) {
  if (arr.length < 2) {
    return null;
  }

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestNumber(arr));

// psuedo code
// Check for corner cases -> if array length is less than 2, if array has duplicates, if array has -ve elements
// -> Maintain two values firstLargest and secondLargest as -Infinity
// -> Check if the current index is > than firstLargest
// -> Then the older value of firstLargest becomes the secondLargest
// -> Update secondLargest as firstLargest
// -> Update firstLargest as the current index
// -> if the current index is not > than firstLargest , check if the current index is > than second largest
// -> if so - Update secondLargest as the current index
// -> return secondLargest
