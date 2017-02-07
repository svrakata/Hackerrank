/**
 * Created by svrakata on 19.1.2017 г..
 */

final();

function final() {
    let x1 = 0,
        v1 = 2,
        x2 = 5,
        v2 = 3;
    while(true){
        x1 += v1;
        x2 += v2;
        if(x1 === x2){
            console.log('YES');
            return;
        }
        if(x1 > x2 && v1 >= v2){
            console.log('NO');
            return;
        }
        else if(x2 > x1 && v2 >= v1){
            console.log('NO');
            return;
        }
    }
}
