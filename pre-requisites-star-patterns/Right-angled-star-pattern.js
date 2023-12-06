// Given an integer N, print the following pattern : 
//* 
//* * 
//* * *
//* * * *
//* * * * *
//* * * * * *


function printPattern(n) {
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= n; j++) {
            if (j <= i) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        console.log();
    }
}

printPattern(5);
