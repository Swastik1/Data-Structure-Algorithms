// Given an integer N, print the following pattern.
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

function printPattern(n) {
    // Outer loop for rows
    for (let i = 1; i <= n; i++){
        // Print a '*'  followed by coloumns
        for (let j = 1; j <= n; j++){
            // Print a '*' followed by a space
            process.stdout.write('* ');
        }
        // Move to the next line after printing each row
        console.log();
    }
}

printPattern(6);