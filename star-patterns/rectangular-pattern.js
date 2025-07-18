// Print 4*4 rectangular pattern
// ****
// ****
// ****
// ****

// logic
// i is row, j is column
// when i = 0; j loop will run for 4 times. -> adds 4 starts to the row
// when i = 1; row becomes empty -> j loop runs for 4 times -> adds 4 stars to the row
// when i = 2; row becomes empty -> j loop runs for 4 times -> adds 4 stars to the row
// when i = 3; row becomes empty -> j loop runs for 4 times -> adds 4 stars to the row

let n = 4;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}
