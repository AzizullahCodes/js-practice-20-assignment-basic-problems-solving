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

// Write a program to print a multiplication table from 1 to 10 (formatted nicely):
// 1  2  3  4  5  6  7  8  9  10
// 2  4  6  8 10 12 14 16 18  20
// 3  6  9 12 15 18 21 24 27  30
// ...
// 10 20 30 40 50 60 70 80 90 100
// ans 
// for(let  i = 1; i <= 10; i++){var str = '';
//   for(let j = 1; j <=10 ; j++){str = str + i*j + '  ';}
// console.log(str)

// }
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
for(var i = 1; i <= 5; i++){for(var k = 5 ; k > i ;k--){document.write(' &nbsp;')}
  for(var j = 1; j<=((2*i)-1);j++){if(i == 1 || i == 5 ||j== 1|| j== ((2*1)-1)){document.write(' * ')}
  else document.write('&nbsp;&nbsp;')
    }
document.write('<br>')}