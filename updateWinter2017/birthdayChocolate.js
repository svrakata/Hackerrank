// https://www.hackerrank.com/challenges/the-birthday-bar/problem

const solve = function solve(n, s, d, m) {
    // Complete this function

    const len = n;
    const arr = s;
    const day = d;
    const month = m;

    let res = 0;
    let sum = 0;

    for (let i = 0; i < len - (month - 1); i += 1) {
        for (let j = 0; j < month; j += 1) {
            sum += arr[i + j];
        }
        if (sum === day) {
            res += 1;
        }
        sum = 0;
    }

    return res;
};

const solve2 = function solve2() {
    const arr = [1, 2, 3, 4];
    let sum = 0;
    sum += arr[3 + 3];
    return sum;
};

const result = solve(5, [1, 2, 1, 3, 2], 3, 2);
console.log(result);

module.exports = { solve, solve2 };

