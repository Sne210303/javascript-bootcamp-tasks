// Exercise 1: Temperature check - if else
let temperature = 20;
if (temperature < 0) console.log("It's freezing!");
else if (temperature <= 15) console.log("It's cold.");
else if (temperature <= 25) console.log("It's mild.");
else console.log("It's warm.");

// switch
switch (true) {
  case temperature < 0:
    console.log("It's freezing!");
    break;
  case temperature <= 15:
    console.log("It's cold.");
    break;
  case temperature <= 25:
    console.log("It's mild.");
    break;
  default:
    console.log("It's warm.");
}

let number = 6;
if (number % 2 === 0 && number % 3 === 0) console.log("Divisible by both.");
else if (number % 2 === 0) console.log("Divisible by 2.");
else if (number % 3 === 0) console.log("Divisible by 3.");
else console.log("Not divisible by 2 or 3.");

switch (true) {
  case number % 2 === 0 && number % 3 === 0:
    console.log("Divisible by both.");
    break;
  case number % 2 === 0:
    console.log("Divisible by 2.");
    break;
  case number % 3 === 0:
    console.log("Divisible by 3.");
    break;
  default:
    console.log("Not divisible by 2 or 3.");
}

for (let i = 1; i <= 10; i++) console.log(i);

for (let i = 2; i <= 20; i += 2) console.log(i);

let total = 0;
for (let i = 1; i <= 100; i++) total += i;
console.log(total);

const nums1 = [1, 2, 3, 4, 5];
nums1.forEach(n => console.log(n));

const nums2 = [3, 7, 2, 5, 10, 6];
let max = nums2[0];
for (let i = 1; i < nums2.length; i++) {
  if (nums2[i] > max) max = nums2[i];
}
console.log(max);


let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

i = 2;
while (i <= 20) {
  console.log(i);
  i += 2;
}

let sum = 0, j = 1;
while (j <= 100) {
  sum += j;
  j++;
}
console.log(sum);

let k = 5;
while (k < 50) {
  console.log(k);
  k += 5;
}


let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 10);

let sumDo = 0, m = 1;
do {
  sumDo += m;
  m++;
} while (m <= 100);
console.log(sumDo);


const prompt = require('prompt-sync')();
let userInput;
do {
  userInput = parseInt(prompt("Enter a number greater than 10: "));
} while (userInput <= 10);


const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
  guess = parseInt(prompt("Guess a number between 1 and 10: "));
} while (guess !== correctNumber);
console.log("You guessed correctly!");
