const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark}is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}`);
}

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy");

} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scorekoalas >= 100) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}

// Ternary Operator
const personName = "jammu";

personName === "jammu" ? console.log("I love Gulabjamun") : console.log("I love peda");

const favoriteSweet = personName !== "jammu" ? "peda" : "Gulabjamun";
console.log(favoriteSweet);

// to write this if,else
let favoriteSweet1;
if (personName !== "jammu") {
  favoriteSweet1 = "Peda";
} else {
  favoriteSweet1 = "Jamun";
}
console.log(favoriteSweet1);

//we can write ternaryoperators in template literals cant write if/else

console.log(`I love ${personName === "jammu" ? "jamun" : "peda"}`);

// CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

const bill = 275;
const tip = (bill >=50 && bill <=300) ? (bill * 15/100) : (bill * 20/100);
console.log(bill,tip);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
