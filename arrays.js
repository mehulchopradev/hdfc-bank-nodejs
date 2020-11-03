const ar = [10, 5, 3, 7, 10, 2, 8, 9];
const cars = ['audi', 'mercedes', 'bmw'];

console.log(typeof ar); // object
console.log(typeof cars); // object

// index in an array
console.log(cars[0]);
console.log(cars[2]);

// using indexing, modify an element of an array
cars[0] = 'Audi';
console.log(cars);

/* for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
} */

// enhanced for loops
for(const n of ar) {
    console.log(n);
}

for (const car of cars) {
    console.log(car);
}

cars.push('i10');
console.log(cars);

cars.push('i20', 'porshe');
console.log(cars);

cars.pop()
console.log(cars);

cars.pop();
console.log(cars);

cars.unshift('porshe');
console.log(cars);

cars.shift();
console.log(cars);


cars.splice(2, 0, 'porshe');
console.log(cars);

cars.splice(1, 2);
console.log(cars);

cars.splice(1, 1, 'porshe', 'nano');
console.log(cars);

console.log(ar);

ar.sort((n1, n2) => n2 - n1);
console.log(ar);

console.log(cars);
cars.sort();
console.log(cars);
cars.reverse(); // sorts descending order
console.log(cars);