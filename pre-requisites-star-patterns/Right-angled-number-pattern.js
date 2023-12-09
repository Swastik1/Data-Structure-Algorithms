// Given an integer N, print the following pattern : 
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6


function printPattern(n) {
    for (let i = 0; i <= n; i++){
        for (let j = 1; j <= i; j++){
            process.stdout.write(j + " ");
        }
        console.log();
    }
}

printPattern(6);