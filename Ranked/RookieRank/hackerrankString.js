/**
 * Created by svrakata on 11.2.2017 г..
 */

let s = 'hhaacckkeerrrraannkk';
let y = 'hackerrank';
let finalWord = '';
let index = 0;

for (let i = 0; i < y.length; i++) {
    for (let j = index; j < s.length; j++) {
        if(y[i] === s[j]){
            finalWord += s[j];
            index = j + 1;
            break;
        }
    }
}
if(finalWord === 'hackerrank'){
    console.log('YES');
} else {
    console.log('NO');
}