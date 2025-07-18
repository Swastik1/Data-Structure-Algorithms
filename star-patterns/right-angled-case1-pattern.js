// Print right angled number pattern
// 1
// 12
// 123
// 1234
// 12345

// logic
// notice a pattern where we have to console j + 1 pattern

let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}
