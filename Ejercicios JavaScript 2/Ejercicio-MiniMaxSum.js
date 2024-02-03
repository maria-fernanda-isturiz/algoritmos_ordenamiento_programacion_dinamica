'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [1,2,3,4,5];

function miniMaxSum(arr) {
    // Write your code here
    let sortArr = arr.sort((a,b) => a>b ? 1:-1)
    let min = 0
    let max = 0
    
    
    for(let i = 0; i < 4; i++){
        min += arr[i]
    }
    for(let j = 1; j < 5; j++){
        max += arr[j]
    }
    
    console.log(min + " " + max);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
