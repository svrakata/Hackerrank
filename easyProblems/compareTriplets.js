/**
 * Created by svrakata on 26.12.2016 г..
 */

var args = ['5 6 7'];
var args1 = ['3 6 10'];

solve(args,args1);

function solve (x,y) {
    x = x[0].split(' ');
    y = y[0].split(' ');

    var scoreA = 0,
        scoreB = 0;

    for(var i = 0; i <= 3; i++) {
        if (+x[i] > +y[i]) {
            scoreA++;
        }
        if (+y[i] > +x[i]) {
            scoreB++;
        }
    }
    console.log(scoreA + ' ' + scoreB);
}
