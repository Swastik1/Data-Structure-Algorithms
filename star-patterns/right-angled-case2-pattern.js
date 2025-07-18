// Print right angled number pattern -
// 1
// 22
// 333
// 4444
// 55555

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

// dry run
// i  |  j                       j loop (i + 1 )
// 0  |  0         -- 1 times    (i + 1) * 1 time
// 1  |  0,1       -- 2 times    (i + 1) * 2 time
// 2  |  0,1,2     -- 3 times    (i + 1) * 3 time
// 3  |  0,1,2,3   -- 4 times    (i + 1) * 4 time
// 4  |  0,1,2,3,4 -- 5 times    (i + 1) * 5 time
