// Given an integer N, print the following pattern : 

// * * * * * *
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n; j > 1; j--) {
            if (j >= i) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        console.log();
    }
}

pattern(6)