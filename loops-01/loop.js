// Create a hello world function where it should print for 20 times along with its each count.

function helloWorld(n) {
  let num = 0;
  for (let i = 0; i < n; i++) {
    num = num + 1;
    console.log("Hello World", num);
  }
}

helloWorld(20);

// Guess the output

function newLoop() {
  for (let i = 3; i < 5; i++) {
    console.log("Hello Swastik");
  }
}

newLoop();

// Guess the output

function xyz() {
  for (let i = 2; i < 9; i = i + 2) {
    console.log("This is a function " + i);
  }
}

xyz();

// Print all the elements in the array
let arr = [10, 6, 2, 0, 8, 3, 80];

function printArr(n) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let arrItems = n[i];
    console.log(arrItems);
  }
}

printArr(arr);
