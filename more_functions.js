/**
 * Whenever we define a function (using anyway) in javascript,
 * a variable whose name is the name of the function get created in the program
 */
function abc() {
    console.log('Abc called');
}

const pi = 3.14;

console.log(typeof pi); // number. variable pi stores a value that is a number
console.log(typeof abc); // function. variable abc (name of the function) stores a value that is a function
// in javascript functions are treated as regular values. string, number, boolean, function

function pqr() {
    const i = 90; // variable i -> 90 (number) -> scope(pqr)

    // variable mno -> function value -> scope(pqr)
    // in javascript a function can be defined inside another function
    function mno() {
        const j = 80; // variable j -> 80 (number) -> scope(mno)
        console.log(j); // 80
        console.log(i + 100); // inner function can access its outer function variables
    }

    mno(); // variable mno becomes a callable variable
    // i(); // variable i is not callable
    console.log(i);
}

pqr();
// variable pqr that will store the pqr function value
// mno(); // this is not going to work


function xyz() {
    const j = 89; // j -> number -> scope(xyz)

    // ert -> function value -> scope(xyz)
    function ert() {
        const a = 100;

        // the value of the variable j will still be accessible whenever the inner function (ert) is called,
        // even after the outer function has returned (xyz)
        // Closures. Where the innner function maintains a reference to the data of its surrounding environment, at all times
        return a + j;
    }

    // in javascript a function can return another function
    return ert;
}

const f = xyz();
// f -> function value -> scope(global, entire program)
// xyz -> function value

const v = f();
console.log(v); // 189

// weq -> function value -> scope(entire file)
function weq(func) {
    const j = 20;
    // func -> function value -> scope(weq)
    return func(j);
}

// rto -> function value -> scope(entire file)
/* function rto(i) {
    return i * 10;
} */

// in javascript a function can be passed as an argument to another function
// callback functions
// const ans = weq(rto);
/* const ans = weq(function (i) {
    return i * 10;
}); */

/* const ans = weq((i) => {
    return i * 10;
}); */

// callback function using arrow function
const ans = weq(i => i * 10);
console.log(ans); // 200












