"use strict";


// lab 2 prob 1

// Take three numbers from 3 inputs.
// Compare the numbers to find the smallest.
// Print the smallest number.

function smallestOfNumbers(number1, number2, number3) {
  return Math.min(number1, number2, number3);
}
console.log(smallestOfNumbers(78, 67, 9));




// lab 2 prom 2

//Take a number as input.
// Check if the number is positive, negative, or zero.
// Print the result.

let user1 = prompt("Type in a number.");

function numberInputNegative(number) {
  if (number > 0) {
    alert("Positive");
  } else if (number === 0) {
    alert("Zero!");
  } else if (number < 0) {
    alert("Negative");
  }
}

numberInputNegative(Number(user1));





//lab 2 prom 3

let user2 = prompt("Type in your age?");

function legalAge(a) {
  if (a >= 18) {
    alert("You can vote!");
  } else {
    alert("You can not vote.");
  }
}

legalAge(user2);
