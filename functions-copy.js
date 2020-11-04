// function definition
function perimeterRectangle(length=3, breadth=2) {
    return 2 * (length + breadth);
}

// function call
const p = perimeterRectangle(5, 3);
console.log(p);

const p2 = perimeterRectangle(5); // the breadth input shud take a default value of 2
console.log(p2);

const p3 = perimeterRectangle(); // the length default value 3 and breadth default value 2
console.log(p3);

/* function areaRectangle(length, breadth) {
    return length * breadth;
} */

/* function areaRectangle(obj) {
    return obj.length * obj.breadth;
} */

// good readability
// here, since the function is not defined in an expression syntax,
// the call can exist before the function definition
const a1 = areaRectangle({
    length: 5.4,
    breadth: 5.2
});
console.log(a1);

// object destructuring
function areaRectangle({ length, breadth }) {
    return length * breadth;
}

// const a1 = areaRectangle(5.4, 5.2);
// console.log(a1);

// flexibility
const a2 = areaRectangle({
    breadth: 5.2,
    length: 5.4,
});
console.log(a2);

// console.log(areaCircle(5)); // this will not work

// define functions as expressions (statements)
const areaCircle = function (radius) {
    return 3.14 * radius * radius;
};

// the call must be after the function definition only
console.log(areaCircle(5));

// arrow functions
/* const perimeterCircle = (radius) => {
    return 2 * 3.14 * radius;
}; */

// applicable only if the function takes one input and has only one expression statement to return
const perimeterCircle = radius => 2 * 3.14 * radius;

console.log(perimeterCircle(5))


// can take 0 to n inputs
// variable number of inputs
function myAdd(...args) {
    let sum = 0;
    for (const arg of args) {
        sum += arg;
    }

    return sum;
}

// all the variable number of arguments get bundled in the array
console.log(myAdd());
console.log(myAdd(4, 5));
console.log(myAdd(4, 2, 3, 5, 6, 7));