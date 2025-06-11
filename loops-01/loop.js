// Create a hello world function where it should print for 20 times along with its each count.

function helloWorld(n, num) {
  num = 0;
  for (let i = 0; i < n; i++) {
    num = num + 1;
    console.log("Hello World", num);
  }
}

helloWorld(20);

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
