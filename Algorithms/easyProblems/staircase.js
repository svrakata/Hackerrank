/**
 * Created by svrakata on 26.12.2016 г..
 */

var n = 8;
 solve(n);
 function solve(x) {
     var hope = [],
         n = x,
         sopa = '',
         k = n - 1,
         kur = '';

     for(var z = 0;z <= n; z++){
        kur += ' ';
     }

     for(var i = 0; i < n; i++){
         hope[i] = [];
         for(var j = 0; j < n - k; j++){
             hope[i][j] = '#';
         }
         k--;
    }
        k = n - 1;
    for(i = 0; i < n; i++){
        for(j = 0; j < n - k; j++){
            sopa += hope[i][j];
        }
        var gg = (kur + sopa).slice(-n);
        console.log(gg);
        sopa = '';
        k--;
    }


 }