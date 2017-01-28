/**
 * Created by svrakata on 25.12.2016 г..
 */

var args = ['1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5'];
var word = 'abc';

solve(args,word);
function solve(arr,wor) {
    var hui = [],
        arr = arr[0].split(' '),
        maxHeight = 0,
        width = wor.length,
        area;
    for(var i = 0; i < wor.length; i++){
        switch (wor[i]){
            case 'a': hui[i] = 0;
                break;
            case 'b': hui[i] = 1;
                break;
            case 'c': hui[i] = 2;
                break;
            case 'd': hui[i] = 3;
                break;
            case 'e': hui[i] = 4;
                break;
            case 'f': hui[i] = 5;
                break;
            case 'g': hui[i] = 6;
                break;
            case 'h': hui[i] = 7;
                break;
            case 'i': hui[i] = 8;
                break;
            case 'j': hui[i] = 9;
                break;
            case 'k': hui[i] = 10;
                break;
            case 'l': hui[i] = 11;
                break;
            case 'm': hui[i] = 12;
                break;
            case 'n': hui[i] = 13;
                break;
            case 'o': hui[i] = 14;
                break;
            case 'p': hui[i] = 15;
                break;
            case 'q': hui[i] = 16;
                break;
            case 'r': hui[i] = 17;
                break;
            case 's': hui[i] = 18;
                break;
            case 't': hui[i] = 19;
                break;
            case 'u': hui[i] = 20;
                break;
            case 'v': hui[i] = 21;
                break;
            case 'w': hui[i] = 22;
                break;
            case 'x': hui[i] = 23;
                break;
            case 'y': hui[i] = 24;
                break;
            case 'z': hui[i] = 25;
                break;
        }
    }
    for(var j = 0;j < hui.length;j++){
        var val = +arr[hui[j]];
        if(maxHeight < val){
            maxHeight = val;
        }
    }

    area = maxHeight * width;
    console.log(area);

}