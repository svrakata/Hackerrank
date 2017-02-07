/**
 * Created by svrakata on 21.1.2017 г..
 */

final();

function final() {
    let S = 'SOSSPSSQSSOR';
    let arr = [],
        count = 0;
    arr = S.match(/.{1,3}/g);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i][0] !== 'S'){
            count++;
        }
        if(arr[i][1] !== 'O'){
            count++;
        }
        if(arr[i][2] !== 'S'){
            count++;
        }
    }
    console.log(count);


    //arr.push(S.match(/.{1,3}/g));


}
