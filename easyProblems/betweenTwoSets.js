/**
 * Created by svrakata on 21.1.2017 г..
 */

final();

function final() {
    let n = 2,
        m = 3,
        a= [2,4],
        b = [16,32,96],
        arr = [],
        aTrue = false,
        bTrue = false,
        count = 0;


    for (let i = a[n - 1]; i <= b[0]; i++) {
        arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if(arr[i] % a[j] === 0){
                aTrue = true;
            }
            else{
                aTrue = false;
                break;
            }
        }
        for (let j = 0; j < b.length; j++) {
            if(b[j] % arr[i] === 0){
                bTrue = true;
            }
            else{
                bTrue = false;
                break;
            }
        }
        if(aTrue && bTrue){
            count++;
        }
    }
    console.log(count);
}
