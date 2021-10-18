// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    A.sort((a, b) => a-b)

    var k=0
    while(A[k] <= 0) {
        k++
        if(k >= A.length)
            return 1
    }
    
    

    for (let i = k+1; i < A.length; i++) {
        
        if(A[i] > A[i-1]+1)
            return A[i-1]+1
    }

    return A[A.length-1] + 1
}

var A = [-1, -3]

console.log(solution(A))