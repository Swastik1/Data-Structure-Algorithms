// Given an integer N, print the following pattern : 

//  1
//  2 2
//  3 3 3
//  4 4 4 4
//  5 5 5 5 5
//  6 6 6 6 6 6

function printPattern(n) {
    for (let i = 4; i < n; i++){
        for (let j = 1; j <= i; j++) {        
            process.stdout.write(i + " ");
        }
        console.log();
    }
}

printPattern(6);

