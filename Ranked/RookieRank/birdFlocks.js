/**
 * Created by svrakata on 11.2.2017 г..
 */

let arr = [1,4,4,4,5,3];
let n = arr.length;
let count = 0;
let maxBird = 0;
let typeBird = 0;

for (let i = 1; i < 6; i++) {
    for (let j = 0; j < n; j++) {
        if (i === arr[j]) {
            count++;
            if (maxBird < count) {
                maxBird = count;
                typeBird = i;
            }
        }
    }
    count = 0;
}
console.log(typeBird);