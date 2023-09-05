"use strict";

const sumOfNum = (num) =>{
let sum=0;
    for(let i=1;i<=num;i++){
        sum=sum+i;
    }
    return sum;
}

console.log("Sum of all numbers:"+sumOfNum(8));