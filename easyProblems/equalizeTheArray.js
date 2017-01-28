/**
 * Created by svrakata on 21.1.2017 г..
 */

final('6 37 32 97 35 76 62');

function final(input) {
    //input = input.split('\n');
    let arr = [];
    arr.push(input.substring(0,1));
    arr.push(input.substring(2,input.length));
    let n = +arr[0];
    arr = arr[1].split(' ').map(Number);
    let maxSeq = 1,
        count = 1;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]){
                count++;
                if(maxSeq < count){
                    maxSeq = count;
                }
            }
        }
        count = 1;
    }
    let result = arr.length - maxSeq;
    console.log(result);
}
