// loop within loop logic
// code runs 9 times

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("*");
//   }
// }

// logic ----
// when i = 0; j loop runs until it breaks the condition. ( 3 times - 0,1,2)
// when i = 1; j loop runs until it breaks the condition. ( 3 times - 0,1,2)
// when i = 2; j loop runs until it breaks the condition. ( 3 times - 0,1,2)
// when i = 3; j loop breaks because i < 3 -> 3 < 3 is false

// Example 1 ->
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log("i=" + i + " j=" + j);
//   }
// }

// Example 2 ->
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < i; j++) {
//     console.log("i=" + i + " j=" + j);
//   }
// }

// Example 3 ->
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log("i=" + i + " j=" + j);
//   }
// }

// Example 4 ->
// for (let i = 0; i < 3; i++) {
//   for (let j = i; j > 0; j--) {
//     console.log("i=" + i + " j=" + j);
//   }
// }

// Example 4 ->
// for (let i = 0; i < 3; i++) {
//   for (let j = i; j >= 0; j--) {
//     console.log("i=" + i + " j=" + j);
//   }
// }

// Example 5 ->
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log("i=" + i + " j=" + j);
  }
}
