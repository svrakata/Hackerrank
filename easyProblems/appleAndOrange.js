/**
 * Created by svrakata on 18.1.2017 г..
 */

final();
function final() {
    let applesHitHouse = 0,
        orangesHitHouse = 0;

    for (let i = 0; i < apple.length; i++) {
        if(apple[i] + a >= s && apple[i] + a <= t ){
            applesHitHouse++;
        }
    }
    for (let i = 0; i < orange.length; i++) {
        if(b - orange[i] <= t && b - orange[i] >= s ){
            orangesHitHouse++;
        }
    }
    console.log(applesHitHouse + '\n' + orangesHitHouse);
}
