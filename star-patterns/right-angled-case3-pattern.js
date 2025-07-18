// Print right angled number pattern
// 12345
// 1234
// 123
// 12
// 1

let n = 5;

// One way
for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// dry run
// i  |  j                                j loop ( j < i )
// 5  |  0, 1, 2, 3, 4  ---> 5 times
// 4  |  0, 1, 2, 3     ---> 4 times
// 3  |  0, 1, 2        ---> 3 times
// 2  |  0, 1           ---> 2 times
// 1  |  0              ---> 1 time

// Another way
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// dry run
// i | j          j loop ( n - i )
// 0 | 5 times
// 1 | 4 times
// 2 | 3 times
// 3 | 2 times
// 4 | 1 times

// logic
// if we add (j + 1) to the j output we get the desired result
