/**
 * Created by svrakata on 26.12.2016 г..
 */

var n = 9,
    c = [10,20,20,10,10,30,50,10,20];

solve(n,c);
function solve(n,c) {
    var count = 1;
    var result = 0;
    for(var i = 0; i < n; i++){
        for(var j = i + 1; j < n; j++){
            if(c[i] !== false && c[i] === c[j]){
                count++;
                c[j] = false;
            }
        }
        result += Math.floor(count/2);
        count = 1;
    }
    console.log(result);
}
