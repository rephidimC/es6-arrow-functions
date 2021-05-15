import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// var numbers = [3, 56, 2, 48, 5];

// 1. Method 1
// function square(x) {
//   return x * x;
// }

// console.log(numbers.map(square));

// OR

// console.log(
//   numbers.map(function square(x) {
//     return x * x;
//   })
// );

// OR
// by deleting the name of the function to have an anonymous function

// console.log(
//   numbers.map(function (x) {
//     return x * x;
//   })
// );

// OR
// by using the arrow method

// console.log(
//   numbers.map(x=> x * x);

//Map -Create a new array by doing something with each item in an array.
//QUESTION
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
//ANSWER
// const newNumbers = numbers.map((x) => x * 2);
// console.log(newNumbers);

//////Filter - Create a new array by keeping the items that return true.
//QUESTION
// const newNumbers = numbers.filter(function(num) {
//   return num < 10;
// });
// console.log(newNumbers);
//ANSWER
// const newNumbers = numbers.filter(num => num < 10);
// console.log(newNumbers);

//QUESTION
//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     return accumulator + currentNumber;
// })
//ANSWER
// var newNumber = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber);
// console.log(newNumber);

////Find - find the first item that matches from an array.
//QUESTION
// const newNumber = numbers.find(function (num) {
//   return num > 10;
// })
//ANSWER
// const newNumber = numbers.find( num => num > 10 );

////FindIndex - find the index of the first item that matches.
//QUESTION
// const newNumber = numbers.findIndex(function (num) {
//   return num > 10;
// })
//ANSWER
//const newNumber = numbers.findIndex(num => num > 10);
