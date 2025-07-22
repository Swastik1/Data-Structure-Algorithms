// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

var reverse = function (x) {
  let rev = 0;
  let xCopy = x;
  x = Math.abs(x);

  while (x > 0) {
    let last = x % 10; // last digit of the number
    rev = 10 * rev + last; // add the last digit to the reverse
    x = Math.floor(x / 10); // remove the last digit
  }

  let limit = Math.pow(2, 31);

  if (rev < -limit || rev > limit) return 0; // constraint check the limit if true then return 0

  return xCopy < 0 ? -rev : rev;
};

console.log(reverse(-97773737398));
