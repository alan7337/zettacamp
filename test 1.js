/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */

let max = (Array, max = Array(0)) => {
    for(let i=0; i<Array.length;i++){
        if(max<Array[i])max=Array[i];
    }
    return max
}

let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];
console.log(max(numbers))