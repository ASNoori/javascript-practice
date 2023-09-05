'use strict';

const arr =[22,9,5,14,2,32];
const findMin = (arr) =>{
    let min = arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min = arr[i];
        }
       
    }
    return min;
}

console.log("Minimum value of an array is:"+ Math.min(...arr));
console.log(`Minimum value of ${arr} is: ${findMin(arr)}` );