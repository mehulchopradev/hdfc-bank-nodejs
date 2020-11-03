// variables
let fullName = 'mehul chopra'; // string
const age = 34; // number
let pi = 3.14; // number
let trumpWillWin = true; // boolean

// in nodejs we can create variables using `var`
// but avoid it. Prefer the es6 way of creating variables

console.log(fullName);
console.log(age);
console.log(pi);
console.log(trumpWillWin);

// the above variable values can be modified
// age = 35; // will give an error here as we are tring to change value of a const variable
pi = 3.14321;

console.log(age);
console.log(pi);

// const a; // this will not work as const variable must be initialized at the line of declaration
const a = 45;
console.log(a);

// Prefer first `const`, and then `let`

// objects as values to be given to variables
const s1 = {
    name: 'mehul',
    gender: 'm',
    roll: 10
}; // object
/* console.log(s1.name);
console.log(s1.gender);
console.log(s1.roll); */

// object destructuring
const { name: studentName, gender, roll: rollNo } = s1;
console.log(studentName);
console.log(gender);
console.log(rollNo);

// this is not allowed
/* s1 = {
    name: 'jill',
    gender: 'f',
    roll: 12
}; */

// trying to change the attribute of the object. This is fine and allowed
s1.name = 'Mehul Chopra';
console.log(s1.name);