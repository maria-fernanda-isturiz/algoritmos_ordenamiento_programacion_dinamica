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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let array = arr
    let positive = 0
    let negative = 0
    let zero = 0
    let ratioPositive, ratioNegative, ratioZero
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negative++
        }
        if(arr[i] > 0){
            positive++
        }
        else if (arr[i] === 0){
            zero++
        }
    }
    
    ratioPositive = (positive/arr.length);
    ratioNegative = (negative/arr.length);
    ratioZero = (zero/arr.length);
    
    console.log(`${ratioPositive.toFixed(6)}`)
    console.log(`${ratioNegative.toFixed(6)}`)
    console.log(`${ratioZero.toFixed(6)}`)
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
