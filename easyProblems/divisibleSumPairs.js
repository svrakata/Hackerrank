/**
 * Created by svrakata on 21.1.2017 г..
 */7

final();

 function final() {
     let n = 6,
         k = 3,
         a = [1, 3, 2, 6, 1, 2],
         count = 0;

     for (let i = 0; i < n-1; i++) {
         for (let j = i+1; j < n; j++) {
             if((a[i] + a[j]) % k === 0){
                 count++;
             }
         }
     }
     console.log(count);
 }
