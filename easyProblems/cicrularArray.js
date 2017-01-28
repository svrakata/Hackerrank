/**
 * Created by svrakata on 27.12.2016 г..
 */

solve();
function solve() {
    var n = 3,
        k = 2,
        q = 3,
        a = [1,2,3];

    for(var i = 0;i <= k; i++){
        var hui = a.pop();
        a.unshift(hui);
    }
    for(var j = 0; j < q;j++){
        console.log(a[j]);
    }






}