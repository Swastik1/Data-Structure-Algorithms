// Given an integer N, print the following pattern : 
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

function pattern(n) {
    for (let i = n; i >= 1; i--) {          // i = 6 , satisfies the condition i >=1    
        for (let j = 1; j <= i; j++){       // control moves to the inner loop, checks j <= 6 , satisfies the condition so j++ until 6 
            process.stdout.write(j + " ")   // print j > 1 2 3 4 5 6
        }
        console.log();                      // next line 
    }
}

pattern(6);

// Logic continues ..

// i = 5, satisfies the condition i >= 1; i-- (here i-- means this iteration will run until i >= 1 )
// ... for ex - if the n is less than 1 the loop doesnt run as it doesn't satisfy any condtion
// control moves to the inner loop , checks j <= 5 , satisfies the condition so j++ until 5
// print j > 1 2 3 4 5

// this itearation continues upto i = 1 where it checks j <= 1 and the as i is 1, j++ will work until 1
// print j > 1

