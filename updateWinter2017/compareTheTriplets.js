// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function

    let scoreA = 0;
    let scoreB = 0;

    // this is faster

    if (a0 > b0) {
        scoreA++;
    } else if (b0 > a0) {
        scoreB++;
    }

    if (a1 > b1) {
        scoreA++;
    } else if (b1 > a1) {
        scoreB++;
    }

    if (a2 > b2) {
        scoreA++;
    } else if (b2 > a2) {
        scoreB++;
    }


    // --- with spread ...args
    // const leftSide = args.splice(0,3);
    // const rightSide = args;

    // for (let i = 0; i < 3; i++) {
    //     if (leftSide[i] > rightSide[i]) {
    //         scoreA++;
    //     } else if (rightSide[i] > leftSide[i]) {
    //         scoreB++;
    //     } else {
    //         // keep walkin'
    //     }
    // }

    return [scoreA, scoreB];
}

const result = solve(1,2,3,3,2,1);
console.log(result.join(' '));