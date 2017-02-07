/**
 * Created by svrakata on 25.12.2016 г..
 */

var s = 'saveChangesInTheEditor';

solve(s);

function solve() {
    var i = 0,
        character = '',
        count = 1;
    while (i < s.length){
        character = s[i];
        if(character == character.toUpperCase()){
            count++;
        }
        i++;
    }
    console.log(count);
}