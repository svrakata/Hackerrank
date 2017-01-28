/**
 * Created by svrakata on 21.1.2017 г..
 */


final();

function final() {
    let s = 'aba',
        n = 10;
    let asS = (s.match(/a/g)||[]).length,
        len = s.length,
        remain = n % s.length,
        totalTime = (n - remain) / len,
        count = totalTime * asS;

        for (let i = 0; i < remain; i++) {
            if(s[i] === 'a'){
                count++;
            }
        }
        console.log(count);
}