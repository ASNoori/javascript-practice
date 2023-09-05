// Strict Mode
'use strict';
let hasDriversLicense = false;
const passTest = true;
if (passTest) {
  // hasDriverLicense = true; will show not defined error in strict mode.
  hasDriversLicense = true;
}
console.log(hasDriversLicense);

// Function - reusable block of code
function logger() {
  console.log("print logger");
}
logger();
logger();
logger();
// function declaration
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(2, 0);
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
console.log(fruitProcessor(7, 8));

function calcAge(birthyear) {
  return 2037 - birthyear;
}
const age1 = calcAge(1990);
console.log(age1);

//function expresssion
const calcAge2 = function (birthyear) {
  return 2037 - birthyear;
}

const age2 = calcAge2(1980);
console.log(age1, age2);

// Arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1987);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2023 - birthyear;
  const retirement = 60 - age;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    console.log(`${firstName} already retired!!`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1976, "John"));
// console.log(yearsUntilRetirement(1956));
console.log(yearsUntilRetirement(1946, "Jake"));
// function calling another function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
  return juice;
}

console.log(fruitProcessor(2, 3));

// function calling another function
function calcAge(birthyear) {
  return 2023 - birthyear;
}

function hasQualified(birthyear) {
  const age = calcAge(birthyear);
  if (age >= 18)
    return "Qualified";
}
console.log(hasQualified(1998));

// CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated so one average score per team.

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
function runChallenge1() {
  const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
  console.log(calcAverage(3, 4, 5));

  let scoreDolphins = calcAverage(44, 23, 71);
  let scoreKoalas = calcAverage(65, 54, 49);
  console.log(scoreDolphins, scoreKoalas);

  const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
      console.log("No team wins...");
    }
  }

  checkWinner(scoreDolphins, scoreKoalas);

  // Test2
  scoreDolphins = calcAverage(85, 54, 41);
  scoreKoalas = calcAverage(23, 34, 27);
  checkWinner(scoreDolphins, scoreKoalas);
}
runChallenge1();

// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
const calcTip = bill => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// tips[0]=calcTip(bills[0]);
// tips[1]=calcTip(bills[1]);
// tips[3]=calcTip(bills[2]);

console.log(bills);
console.log(tips);

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

// Objects

const john = {
  firstName: 'John',
  lastName: 'Oliver',
  age: 2023 - 1995,
  job: 'Developer',
  friends: ['jonas', 'nick', 'henry', 'steven']
}
console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

const nameKey = 'Name';
console.log(john['first' + nameKey]);
console.log(john['last' + nameKey]);

// const interestedIn = prompt('What do you want o know about John? Chooce between firstName, lastName, age, job, friends.');
// console.log(john[interestedIn]);

// if(john[interestedIn]){
//   console.log(john[interestedIn]);
// }
// else{
//   console.log("Wrong request! Chooce between firstName, lastName, age, job, friends.");
// }

john.location = "USA";
john["twitter"] = "@johnoliver";
console.log(john);

console.log(`${john.firstName} has ${john.friends.length} friends, and his best friend is called ${john.friends[2]}`);

// Object Methods
const johns = {
    firstName: 'John',
    lastName: 'Oliver',
    birthYear: 1995,
    job: 'Developer',
    friends: ['jonas', 'nick', 'henry', 'steven'],
    hasDriverLicense: false,
    // calcAge: function(birthYear){
    //   return 2023 - birthYear;
    // }
    calcAge: function () {
      // console.log(this);
      this.age = 2023 - this.birthYear;
      return this.age;
    },
    getSummary: function () {
      return `${this.firstName} is ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license. `;
    }
    }
    // console.log(johns.calcAge(johns.birthYear));
    console.log(johns.calcAge());
    console.log(johns.age);
    console.log(johns.age);
    console.log(johns.age);
    console.log(johns.getSummary());

// CHALLENGE #3
// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).
const mark = {
  fullName : 'Mark Miller',
  mass : 78,
  height : 1.69,
  calcBMI: function(){
   this.BMI = this.mass / (this.height * this.height);
   return this.BMI;
  }
}
const jonathan = {
  fullName : 'John Smith',
  mass : 92,
  height : 1.95,
  calcBMI: function(){
    this.BMI = this.mass / (this.height * this.height);
    return  this.BMI;
  }
}
jonathan.calcBMI();
mark.calcBMI();
console.log(jonathan.BMI, mark.BMI);
if(jonathan.BMI > mark.BMI){
console.log(`"${jonathan.fullName}'s BMI (${jonathan.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}) BMI!"`);
}else if(mark.BMI > jonathan.BMI){
  console.log(`"${mark.fullName}'s BMI (${mark.BMI}) is higher than ${jonathan.fullName}'s (${jonathan.BMI}) BMI!"`);

}

if(jonathan.calcBMI() > mark.calcBMI()){
  console.log(`"${jonathan.fullName}'s BMI (${jonathan.BMI}) is higher than ${mark.fullName}'s (${mark.BMI}) BMI!"`);
  }else if(mark.BMI > jonathan.BMI){
    console.log(`"${mark.fullName}'s BMI (${mark.BMI}) is higher than ${jonathan.fullName}'s (${jonathan.BMI}) BMI!"`);
  
  }

// For Loop
const years = [1990, 1967, 1999, 2020];  /* display their ages in new array */
const age = [];
for(let i=0;i<years.length;i++){
  // age[i] = 2023 - years[i];
  age.push(2023 - years[i]);
}
console.log(age);

// Continue and Break
const johnArray = ['john','smith',2023-1997,true];
const types= [];
for(let i=0; i<johnArray.length; i++){
 types.push(typeof(johnArray[i]));
}
console.log(types);

// -----Only String-------
const johnArray1 = ['john','smith',2023-1997,true,'john smith'];
const types1= [];
for(let i=0; i<johnArray1.length; i++){
  if(typeof johnArray1[i] !== 'string') continue;
  console.log(typeof johnArray1[i]);
}
// Not Number
const johnArray2 = ['john','smith',2023-1997,true,'john smith'];
const types2= [];
for(let i=0; i<johnArray2.length; i++){
  if(typeof johnArray2[i] === 'number') break;
  console.log(typeof johnArray2[i]);
}
// Backward loop
const johnArray3 = ['john','smith',2023-1997,true,'john smith'];
for(let i=johnArray3.length-1;i>=0;i--){
  console.log(i,johnArray3[i]);
}
// loop inside loop
for(let eat=1; eat<4; eat++){
  console.log(`-----eating time ${eat}-----`);
  for(let food=1; food<6; food++){
    console.log(`----eat food item ${food}--- `);
  }
}
// while loop

let dice = Math.trunc(Math.random()*6)+1;
while(dice !== 6){
  console.log(`You rolled ${dice}`);
  dice = Math.trunc(Math.random()*6)+1;
  if(dice === 6){
    console.log("loop is about to end...");
  }
 
}

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals (tips and totals)

// Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips1 = [];
const total1 = [];

const calcTip1 = (arr) =>{
   for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
    tips1.push(arr[i]>=50 && arr[i]<=300 ? arr[i] * 0.15 : arr[i] * 0.2);
    total1.push(tips1[i]+arr[i]);
   }
   console.log(tips1);
   console.log(total1);
}
calcTip1(bills1);

// Another way to write above function
const calcTip2 = function(bill2){
  return bill2>=50 && bill2<=300 ? bill2 * 0.15 : bill2 * 0.2;
}
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips2 = [];
const total2 = [];
for(let i=0; i<bills2.length;i++){
  const tip2 = calcTip2(bills[i]);
  tips2.push(tip2);
  total2.push(tip2+bills2[i]);
}
// Continuation of first method
const calcAvg = (arr) =>{
  let sum = 0;
  for(let ind=0; ind<arr.length;ind++){
       sum = sum + arr[ind];

  }
  return sum / arr.length;
  // console.log(avg);
}

console.log(calcAvg(total1));
console.log(calcAvg(tips1));




