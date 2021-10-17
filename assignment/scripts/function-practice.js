console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log( 'Hello, ', helloName('Matt') + '!');


// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log( 'Total is', addNumbers(5, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  return num1 * num2 * num3;
}
console.log('Three numbers multipled equals', multiplyThree(2, 2, 2));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
     return false;
  }
}
console.log('Number is postive and greter than zero', isPositive(5));
console.log('Number is Negative and less than zero', isPositive(-12));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.length === 0) {
     console.log("Array is empty!", array)
  } 
  else {
    return array[array.length -1];

  }  
}
console.log('last value in array is', getLast(5));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find( value, array ){

  console.log(value, array );

  for (let i=0; i < array.length; i++){
  if( array[i] === value ){
    return true;
  }
    return false; 
  }
}
  console.log('The value is not found', find(5, [15]));
  console.log('The value is found', find(5, [5]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
   if (letter === string.charAt(0)){
     return true;

   }
   else {
     return false;
   }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

function sumAll( ) {
  let array=[];
  let sum = 0
  // TODO: loop to add items
  for ( i=0; i < array.length; i++ ) {
  sum += array.push(i);
  
  console.log(sum);
  console.log('The sum is', sum);
  console.log('The array values are', array);
  }
  return sum;
}
console.log('Total sum is', sumAll());
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function test(newAarr) {

let emptyArr=[];
for ( i=0; i < newAarr.length; i++ ) {

if (newAarr[i] > 0 ) {
  return newAarr;
}
else {
  return emptyArr;
}
}
}
console.log('Adding positive numbers', test([1, 2, 3, 4, 5, 6]));
console.log('Adding negative numbers', test([-1, -2, -3, -4, -5]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it
//     This function will take only return the first numeric value
//     in the array

function getFirstValue(arr) {
	return arr[0];
}
console.log('value is' , getFirstValue([1, 2, 3]));