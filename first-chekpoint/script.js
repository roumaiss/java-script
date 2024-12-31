// Exo 1 : String Manipulation Functions
var sentence = "You look great today";
// Reverse a String
function Reverse_string(str) {
  return str.split("").reverse().join("");
}

console.log(`the reversed sentence is : ${Reverse_string(sentence)}`);

// Count Characters
function Count_Characters(str) {
  return str.length;
}
console.log(`the length of the sentence is : ${Count_Characters(sentence)}`);

// Capitalize Words
function Capitalize_Words(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(`the Capitalize sentence is : ${Capitalize_Words(sentence)}`);

// Exo 2: Array Functions
const array1 = [2, 8, 87, 5, 3, 9, 5, 7];
// Find Maximum and Minimum
// i was able to just use math.max without using the reduce but i wanted to understand her more
function maximum(arr) {
  return arr.reduce(
    (accumulator, currentValue) => Math.max(accumulator, currentValue),
    0
  );
  // return Math.max(...arr);
}

function minimum(arr) {
  return Math.min(...arr);
}
console.log(`the minimum of the array is : ${minimum(array1)}`);
console.log(`the maximum of the array is : ${maximum(array1)}`);

// Sum of Array
function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
console.log(`the sum of the array is : ${sum(array1)}`);

// Filter Array
function Filter(arr) {
  return arr.filter((num) => num > 4);
}
console.log(`the fltired array is : ${Filter(array1)}`);

// Exo 3: Mathematical Functions
// Factorial
const num = prompt("Give me a number");
function factorial(value) {
  let fact = 1;
  for (let i = value; i > 0; i--) fact *= i;
  return fact;
}
console.log(`the facturial of ${num} is ${factorial(num)}`);

// Prime Number Check
function prime(value) {
  // i could use for but i just wanted to change
  let i = 2;
  while (i <= Math.sqrt(value)) {
    if (value % i === 0) {
      return false; // Exit function early if not prime
    }
    i++;
  }
  return true;
}

if (prime(num)) {
  console.log(`${num} is a prime number`);
} else {
  console.log(`${num} is not a prime number`);
}

// Fibonacci Sequence
const terms = prompt(
  "give the number of the terms for the  Fibonacci Sequence"
);

function Fibonacci_Sequence(num) {
  var FB_1 = 1;
  var FB_2 = 0;
  var tmp;
  for (let i = 2; i <= num; i++) {
    tmp = FB_1;
    FB_1 = FB_1 + FB_2;
    FB_2 = tmp;
  }
  return FB_1;
}
console.log(Fibonacci_Sequence(terms));
