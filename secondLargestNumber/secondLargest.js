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
// -> assume the current index as largest
// -> compare with rest elements in the array
// -> if the current index > largest then update largest
// -> assume the second index as second largest
// -> compare the largest with rest elements in the array
// -> if the substraction count of largest with any element is highest then update the secondLargest
