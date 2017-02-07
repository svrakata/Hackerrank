/**
 * Created by svrakata on 26.12.2016 г..
 */

var a = [[11,2,4],[4,5,6],[10,8,-12]];
var n = 3;

solve(a,n);
function solve(a,n) {
    var diag1 = 0,
    diag2 = 0,
    result;
for(var i = 0,k = n-1; i < n, k >= 0; i++, k--){
    diag1 += a[i][i];
    diag2 += a[i][k];
}
result = Math.abs(diag1 - diag2);
console.log(result);
}

