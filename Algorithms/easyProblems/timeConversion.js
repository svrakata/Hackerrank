/**
 * Created by svrakata on 27.12.2016 г..
 */

var x = "12:00:45AM";
solve(x);
function solve(time) {
    var halfOfDay = time.slice(8,10),
        givvenHour = time.slice(0,2);
    if(halfOfDay === 'PM'){
        switch(givvenHour){
            case '01': givvenHour = 13;
                break;
            case '02': givvenHour = 14;
                break;
            case '03': givvenHour = 15;
                break;
            case '04': givvenHour = 16;
                break;
            case '05': givvenHour = 17;
                break;
            case '06': givvenHour = 18;
                break;
            case '07': givvenHour = 19;
                break;
            case '08': givvenHour = 20;
                break;
            case '09': givvenHour = 21;
                break;
            case '10': givvenHour = 22;
                break;
            case '11': givvenHour = 23;
                break;
            case '12': givvenHour = 12;
                break;
        }
        console.log(givvenHour + time.slice(2,8));
    }
    else{
        if(givvenHour === '12'){
            givvenHour = '00'
            console.log(givvenHour + time.slice(2,8));
        }
        else{
            console.log(time.slice(0,8));
        }

    }
}
