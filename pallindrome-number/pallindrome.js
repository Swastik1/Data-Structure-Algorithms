// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -231 <= x <= 231 - 1

var isPallindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  let xCopy = x;

  while (x > 0) {
    let last = x % 10; // last digit of a number
    rev = 10 * rev + last; // add last digit to the reverse
    x = Math.floor(x / 10); // remove the last digit from the original
  }

  return rev === xCopy;
};

console.log(isPallindrome(-525));
