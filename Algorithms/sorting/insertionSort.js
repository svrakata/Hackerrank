/**
 * Created by svrakata on 4.2.2017 г..
 */

let input = '10\n2 4 6 8 3',
    arr = input.split('\n'),
    numbers = arr[1].split(' '),
    insNumber = numbers[numbers.length - 1];

for (let i = numbers.length - 2; i >= 0; i--) {
        if(numbers[i] > insNumber){
            numbers[i + 1] = numbers[i];
        }
        else{
            numbers[i + 1] = insNumber;
            console.log(numbers.join(' '));
            break;
        }
    console.log(numbers.join(' '));
    if(i === 0){
        numbers[i] = insNumber;
        console.log(numbers.join(' '));
    }
}


