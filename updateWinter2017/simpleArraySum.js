// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(n, ar) {
    // Complete this function

    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        const element = ar[i];
        sum += element;
    }
    return sum;

}

simpleArraySum(6, [1,2,3,4,5,6]);