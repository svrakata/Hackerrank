/**
 * Created by svrakata on 25.12.2016 г..
 */

var args = ['942381765 627450398 954173620 583762094 236817490'];

solve(args);

function solve(arr) {
    var a_temp = arr[0].split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);

    var maxSum = Number.MIN_VALUE,
        minSum = Number.MAX_VALUE,
        sum = a + b + c + d + e;

    for(var i = 0; i <= 4; i++){
        var result = sum - a_temp[i];
        if(result < minSum){
            minSum = result;
        }
        if(result > maxSum){
            maxSum = result;
        }
    }
    console.log(minSum + " " + maxSum);
}
