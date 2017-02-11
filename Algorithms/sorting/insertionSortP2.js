/**
 * Created by svrakata on 7.2.2017 г..
 */
let input = '6\n1 4 3 5 6 2',
    numbers = input.split('\n'),
    arr = numbers[1].split(' ').map(Number);
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i]> arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    for (let j = i + 1; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    console.log(arr.join(' '));
}

