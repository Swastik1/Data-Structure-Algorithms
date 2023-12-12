// Given an integer N, print the following pattern : 
// 6 5 4 3 2 1 
// 6 5 4 3 2 
// 6 5 4 3 
// 6 5 4 
// 6 5 
// 6 

function pattern(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--){
            process.stdout.write(j + " ")
        }
        console.log()
    }
}

pattern(6)