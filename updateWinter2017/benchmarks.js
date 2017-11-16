const Benchmark = require('benchmark');
const functions = require('./birthdayChocolate');

const suite = new Benchmark.Suite();

suite
    .add('1st function', () => {
        let x = 0;
        x++;
    })
    .add('2nd function', () => {
        let x = 0;
        x += 1;
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
    })
    .run({ async: true });

