// problem-solving-assignment
// ques no 1
// nested if practice
// let name = prompt('enter your name');
// if(name === 'aziz'){let enterPassword = +prompt('enter your password')
//     if(enterPassword === 432){console.log('log In successful')}
//     else{console.log('Incorrect password')}
// }
// else{console.log('user name is incorrect')}
// ___________________________________________________________________________________
// ques no 2 
// login system by &&
// let name = prompt('enter your name');
// let password = +prompt('enter your password');
// if(name === 'aziz' && password === 786){console.log('login successful')}
// else{console.log('Login fail')}
// _____________________________________________________________________________________
// ques no 3
// 🔁 Assignment 1: Multiplication Table
// Task: Print the multiplication table (1 to 10) using nested loops.
// Output Example:
// 1 x 1 = 1
// 1 x 2 = 2
// ...
// 10 x 10 = 100 
// ans 
// for(var i = 1; i <= 10; i++){let table = '';
//     for(var j = 1; j <= i; j++){table = i * j;}
//     console.log(table)
// }
// _________________________________________________________________________
// ques no 4 
// 🔲 Assignment 2: Print a Square Pattern
// Task: Print a square of * symbols of size 5x5.
// ans 
// for(var i = 1; i <=5; i++){let str = '';
//     for(var j = 1 ; j <= 5; j++){str = str + '*';}
//     console.log(str)
// }
// ____________________________________________________________________________
// ques no 5 
// ⬜ Assignment 3: Print a Right-Angled Triangle
// Task: Print a right-angled triangle using *.
// for(var i = 1; i <= 5; i++){let str = '';
//     for(var j = 1; j<=i; j++){ str = str + '*'}
// console.log(str)}
// __________________________________________________________________________________
// ques no 6 
// 🔢 Assignment 4: Print a Number Pyramid
// Task: Print the following number pattern:
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ans 
// Assignment 4: Print a Number Pyramid without using trim()

// for (let i = 1; i <= 5; i++) {
//   let line = '';
//   for (let j = 1; j <= i; j++) {
//     line += j;
//     if (j < i) {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }
// _________________________________________________________________________________
// ques no 7 
//  Task: Print the following number pattern:
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ans 
// for(var i = 1; i<= 5; i++){var line ='';
//   for(var j = 1; j<=i; j++)
// {line = line + j;}
// console.log(line)}
// _____________________________________________________________________________
// ques no 8 
// Level 1: Simple Patterns
// Assignment 1: Print a square of stars

// Write a program that uses nested for loops to print a 5x5 square of stars:
// *****
// *****
// *****
// *****
// *****
// ans 
// for(var i = 1; i <= 5; i++){let line = '';
//   for(var j = 1; j<=5; j++){line = line + '*';}
//   document.write(line,'<br>')
// }
// __________________________________________________________________________
// ques no 9 
// Assignment 2: Right-angled triangle
// *
// **
// ***
// ****
// ***** 
// ans 
// for(var i = 1; i <= 5; i++){line = '';
//   for(j = 1; j <=i; j++){line = line + "*";}
//   console.log(line)
// }
// ________________________________________________________________________________
// ques no 10 
// Assignment 3: Inverted triangle
// *****
// ****
// ***
// **
// * 
//  ans 
// for(var i = 5; i >= 1; i--){var line = '';
//   for(var j = 1 ; j <= i; j++){line = line + '*';}
//   console.log(line)
// } 
// _________________________________________________________________________________
// ques 11 
// Assignment 5: 1 to 10 Multiplication Table

// Write a program to print a multiplication table from 1 to 10 
// (formatted nicely):
// 1  2  3  4  5  6  7  8  9  10
// 2  4  6  8 10 12 14 16 18  20
// 3  6  9 12 15 18 21 24 27  30
// ...
// 10 20 30 40 50 60 70 80 90 100
// ans 
 for(let  i = 1; i <= 10; i++){var str = '';
   for(let j = 1; j <=10 ; j++){str = str + i*j + '  ';}
 console.log(str)

 }
// ______________________________________________________________________________________
// ques no 12 
// hollow pyramid 
// ans 
// for(var i = 1; i <= 5; i++){for(var k = 5; k>i;k--){
//   document.write(' &nbsp;&nbsp;')
// }
//   for(var j = 1; j <=((2*i)-1);j++){
//   document.write(' * ');
// }document.write('<br>')}
// ______________________________________________________________________
// ques no 12 
// mirror right angle pattern
// ans 
// for(i = 5;i >=1;i--){for(j=1; j<i;j++){document.write(' &nbsp; ')}
//   for(k = 5; k>=i;k--){document.write('*');}
//   document.write('<br>');
// }
// ___________________________________________________________________
// ques no 13 
// star pattern 
// ans 
// for(var i = 1; i <=5; i++){for(var j = 1; j <=i; j++){
//     document.write('*')
// }
// document.write('<br>')}
// _____________________________________________________________________________
// ques no 14 
// star pattern
// for(var i = 1; i<=5; i++){
//     for(j = 5; j >= i; j--){document.write('*')}
//     document.write('<br>')
// }
// ________________________________________________________________________
// ques no 15 
// star pattern 
// ans 
// for(var i = 1; i <= 5; i++){for(var k = 5; k >i; k--){document.write('&nbsp;')}

//     for(var j = 1; j<=i; j++){document.write('  *  ')}
//     document.write('<br>')
// }
// ______________________________________________________________________________
// ques no 16 
// star pattern 
// for(var i= 1; i <= 5; i++){for(var j = 1; j<= 5; j++)
// {if(i ==1 || i == 5 || j == 1 || j == 5)
//     {document.write(' * ');}else document.write('  &nbsp;&nbsp  ')}
// document.write('<br>')
// }
// ___________________________________________________________________________
// ques no 17 
// 🟢 Basic Level
// Multiplication Table
// Print a multiplication table from 1 to 10 using nested loops.
// 1  2  3  4  5  ...
// 2  4  6  8  10 ...
// ... 
// ans 
// for(var i = 1; i <=10; i++){for(var j = 1; j <=10; j++)
//    { document.write(i*j,'&nbsp;&nbsp;')}
//    document.write(' <br>')
// }
// _________________________________________________________________________________________
// ques no 18 
// 🟡 Intermediate Level
// Number Pyramid
// Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// ans 
// for(var i = 1; i <= 5; i++){for(var j = 1; j <=i; j++){
//     document.write('&nbsp;&nbsp;',j)
// }
// document.write(' <br> ')}
// ________________________________________________________________________________________
// ques no 19 
// Multiplication Table (Formatted)

// Print a table like:
// 1x1=1   1x2=2   ... 1x10=10
// 2x1=2   2x2=4   ... 2x10=20
// ...
// 10x1=10 ...     10x10=100
// ans 
// for(var i = 1; i <= 10; i++){for(var j = 1; j <=10; j++){
//     document.write(`&nbsp;&nbsp;&nbsp;${i}x${j}=${i * j}`)
// }
// document.write(' <br> ')}
// __________________________________________________________________
// ques no 20 
// // . Character Triangle
// A
// B B
// C C C
// D D D D
// ans 
// for(var i = 1; i <= 4; i++){for(var j = 1; j<=i;j++){document.write('A')}
// document.write('<br>')}
// _________________________________________________________________________________
// ques no 21 
// Print numbers from 1 to 10
// Output: 1 2 3 4 5 6 7 8 9 10
// ans 
// for(var i = 1; i < 11; i++){document.write('&nbsp;',i)}
// __________________________________________________________________________________
// ques no 22
// Print even numbers from 1 to 20
// Output: 2 4 6 8 10 12 14 16 18 20
// ans 
// for(var i = 2; i < 21; i++){if(i % 2 === 0){document.write('&nbsp;',i)}}
// ___________________________________________________________________________________
// ques no 23 
// Print the multiplication table of 5
// Output:
// 5 x 1 = 5  
// 5 x 2 = 10  
// ...  
// 5 x 10 = 50
// ans 
// for(var i = 1; i<=10; i++){document.write('5 *'+ i +' = '+ 5 * i)
//     document.write('<br>')
// }
// ____________________________________________________________________________________
// ques no 24 
// Calculate the sum of numbers from 1 to 100
// Output: Sum: 5050
// ans 
// let sum = 0;
// for(var i = 1; i<=100; i++){sum = sum +i;
// }
// document.write(sum)
// ______________________________________________________________________________________
// ques no 25 
// Print all numbers from 10 to 1 (reverse order)
// Output: 10 9 8 7 6 5 4 3 2 1
//  ans 
// for(var i = 10; i >=1; i--){document.write('&nbsp;',i)}
// ____________________________________________________________________________________
// ques no 26 
// Find the factorial of a number (e.g., 5! = 120)
// Hint: Use a loop to multiply numbers from 1 to n.
// ans 
// let factorial = 1;
// for(var i = 1; i <= 5; i++){factorial = factorial*i;}
// document.write(factorial)
// _________________________________________________________________________________________
// ques no 27 
// Print all odd numbers between 1 and 50 
// ans 
// for(var i = 1; i <= 50; i++){if(i%2 !== 0){document.write('&nbsp;',i)}}
// __________________________________________________________________________________
// ques no 28 
// Display this pattern using for loops:
// *
// **
// ***
// ****
// *****
//  ans 
// for(var i = 1 ; i <= 5; i++){for(var j = 1; j <=i; j++)
// {document.write('*')}
// document.write('<br>')
// }
// __________________________________________________________________________________________
// ques no 29 
// ✅ JavaScript Array Methods Practice Assignment
// 🔸 Part 1: Basic Array Operations
// Create an array of your 5 favorite fruits.
// Example: ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// Use push() to add two more fruits at the end of the array.

// Use pop() to remove the last fruit and display it.

// Use unshift() to add two fruits at the beginning.

// Use shift() to remove the first fruit and display it.

// ans 
// let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
// fruits.push('watermelon');
// fruits.push('lemon');
// fruits.pop();
// document.write(fruits);
// fruits.unshift('carrot');
// console.log(fruits);
// fruits.shift();
// console.log(fruits)
// ____________________________________________________________________________________
// ques no 30
//  Part 2: Slice and Splice Practice
// Use slice() to copy the first 3 elements of your updated array into a new array.

// Use slice() to get the last 2 elements from the array (without removing them).

// Use splice() to:

// Remove 2 fruits from the middle of the array.

// Add 2 new fruits at that same position.
// ans 
// let fruits = ['apple','banana','guava','pineapple','orange'];
// let len = fruits.length;
// console.log(len);
// let copy = fruits.slice(0,3);
// console.log(copy);
// fruits.splice(2,2);
// console.log(fruits);
// fruits.splice(2,0,'watermelon','melon');
// console.log(fruits)
// ________________________________________________________________________________
// ques no 31
// 🔸 Part 3: Real Life Example
// Create an array of students:
// ["Ali", "Sara", "Ahmed", "Zara", "John"]

// Use splice() to replace "Ahmed" with "Hassan" and "Fatima".

// Use push() to add a new student "Usman" at the end.

// Use shift() to remove the first student.

// Use slice() to copy the first 3 students into a new array called selectedStudents.

// ans 
// let students = ["Ali", "Sara", "Ahmed", "Zara", "John"];
// students.splice(2,1,'Fatima','Hassan');
// console.log(students);
// students.push('Usame');
// console.log(students);
// let newArray = students.slice(0,3);
// console.log(newArray);
// __________________________________________________________________________________
// ques no 32
// 🔸 Bonus Challenge
// Create a program that:

// Takes an array of numbers.

// Removes the first and last number.

// Adds a number to the start and end.

// Shows the updated array.

// ans 
// let numbers = [10,20,30,40,50];
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(888);
// numbers.push(999);
// console.log(numbers);
// _________________________________________________________________________________
// ques no 33
// nested if practice 
// marriage eligibility checker
// ans 
// let age = +prompt('enter your age');
// if(age >= 18){
//     let education = +prompt('enter your education like,10,12,14')
//     if(education >=12)
//     {let cnic = prompt('do you have cnic(yes/not)')
//         if(cnic === 'yes'){console.log('you are eligible for marriage')}
//         else{console.log('you have no id card')}
//     }
//     else{console.log('you are not educated')}
// }
// else{console.log('your are children')}

// __________________________________________________________________________________________
// ques no 34 
// ternary operator 
// var age = 2;
// var drive = age >=18?'yes drive':'No drive';
// console.log(drive)
// _______________________________________________________________________________________
// ques no 35
// 🔹 Basic Level
// Even or Odd
// Take a number and check whether it's even or odd using the ternary operator.
// ans 
// let number = +prompt('enter a number');
// let check = number%2 === 0?'Even number':'Odd number';
// console.log(check);
// ______________________________________________________________________________________
// ques no 36 
// Positive or Negative
// Take a number and check whether it's positive, negative, or zero.
// ans 
// let number = prompt('enter a number');
// let check = number > 0? 'No is positive':number< 0? 'No is negative':'No is zero';
// console.log(check);
// ____________________________________________________________________________________
// ques no 37 
// Find the Greatest of Two Numbers
// Take two numbers and find which one is greater using a ternary operator.
// ans 
// let number1 = prompt('Enter no one');
// let number2 = prompt('Enter no 2');
// let result = number1 > number2? 'no 1 is greater than no 2':'No 2 is greater than no 1';
// console.log(result);
// _______________________________________________________________________________________
// ques no 38 
// Check for Leap Year
// Input a year and use ternary logic to check whether it's a 
// leap year or not.
// Leap year conditions: divisible by 4, not divisible by 100
//  unless also divisible by 400.
// ans 
// let enterYear = prompt('Enter an year like 2019,2000...');
// let leap = enterYear % 4 === 0? 'This is leap year': 'This is not leap year';
// console.log(leap);
// ___________________________________________________________________________________
// ques no 39 
// 🔹 Creative Challenge
// Grading System
// Input marks (0–100), and use ternary operators to assign grades:

// >=90: A

// >=80: B

// >=70: C

// >=60: D

// <60: F
// ans 
// let enterObtainedMarks = +prompt('Enter obtained marks out of 100');
// let grade = enterObtainedMarks >= 90? 'Grade A':
//  enterObtainedMarks >= 80? 'Grade B':
// enterObtainedMarks >= 70? 'Grade C':
//  enterObtainedMarks >= 60? 'Grade D':
//  enterObtainedMarks < 60 && enterObtainedMarks > 30? 'Grade F':
//  'Fail';
// console.log(grade);
// _________________________________________________________________________
// ques no 40 
// 🔁 Assignment 4: Checkerboard Pattern
// Objective: Print a 5x5 grid of alternating 1s and 0s:
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// 0 1 0 1 0
// 1 0 1 0 1
// ans 
// for(var i = 1; i<=5 ; i ++){for(var j = 1; j <= 5; j++)
//     if((i+j) % 2 === 0){document.write(1,'&nbsp;&nbsp;')}
//     else{document.write(0,'&nbsp;&nbsp;')}
//     document.write('<br>')
// }
// __________________________________________________________________________________________
// ques no  41 
// Assignment 2: Number Pyramid
// Task: Print the following pattern using nested loops (up to 20 rows):
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 
// ans 
//  for(var row = 1; row <= 20; row++){for(var col = 1; col <= row; col++)
//     { document.write('&nbsp;&nbsp;',col*53,'&nbsp;&nbsp;')}
//     document.write('<br>')
//  } 
// _____________________________________________________________________________________
// ques no 42 
// revers 41 Question
// ans 
// for(row = 20; row > 0; row--){for(col = 1; col <= row; col++)
// {document.write('&nbsp;&nbsp;',col*53,'&nbsp;&nbsp;')}
// document.write("<br>")
// }
// _________________________________________________________________________________
// ques no 43 
// array practice 
// ans 
// let students = [];
// console.log(students);
// students.splice(0,0,'ali','hmza','umair','fahad');
// console.log(students);
// ________________________________________________________________________________________
// ques no 44 
// hollow square star pattern 
// ans 
// for(i = 1; i<=5;i++){
//     for(k = 1; k <=5;k++){if(i == 1 || i == 5 ||k == 1||k== 5){ document.write('*');}
//         else document.write('&nbsp;&nbsp;')}
   
//     document.write('<br>')}
// ______________________________________________________________________________________
// ques no 45 
// 🔢 Number Patterns
// Row-wise Number Pattern
// 1 2 3
// 1 2 3
// 1 2 3
// Task: Print numbers in each row using nested loops.
// // ans 
// for(let row = 1; row <= 3; row++){for(let col = 1; col <= 3; col++)
// {document.write(col,'&nbsp;')}
// document.write('<br>')
// }