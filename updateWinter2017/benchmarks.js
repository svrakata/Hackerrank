const Benchmark = require('benchmark');
const functions = require('./birthdayChocolate');

const suite = new Benchmark.Suite();

suite
    .add('1st function', () => {
        functions.solve();
    })
    .add('2nd function', () => {
        functions.solve2();
    })
    .on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', () => {
        console.log(`Fastest is ${suite.filter('fastest').map('name')}`);
    })
    .run({ async: true });

