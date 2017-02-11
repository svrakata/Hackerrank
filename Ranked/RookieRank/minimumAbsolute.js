/**
 * Created by svrakata on 11.2.2017 г..
 */
let arr = [3,0,-7],
    n = arr.length;
    let minSum = Number.MAX_SAFE_INTEGER;
    arr = arr.sort(function(a, b) {
        return a - b;
    });
    for (let i = 0; i < arr.length - 1; i++) {
        if((arr[i + 1] - arr[i]) < minSum){
            minSum = (arr[i + 1] - arr[i]);
        }
    }
console.log(minSum);