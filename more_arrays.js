const marks = [5, 6, 3, 10, 4, 8, 9, 7];

// print all the even marks scored in the class
console.log('Print all even marks***********')
/* for (const mark of marks) {
    if (mark % 2 === 0) {
        console.log(mark);
    }
} */

// functional programming
marks.forEach(mark => {
    if (mark % 2 === 0) {
        console.log(mark);
    }
});

console.log('Print all odd elements more than 5******');

marks.forEach(mark => {
    if (mark % 2 != 0 && mark > 5) {
        console.log(mark);
    }
});

// Get a new array of only the even elements from the marks array
// filtering
/* const evens = [];
for (const m of marks) {
    if (m % 2 === 0) {
        evens.push(m);
    }
} */

const evens = marks.filter(mark => mark % 2 === 0);
console.log(evens);

// Get a new array of odd elements more than 5 from the marks array
const odds = marks.filter(mark => mark % 2 != 0 && mark > 5);
console.log(odds);

// get a new array of marks deducted by 1 from the marks array
// mapping
const deductedMarks = marks.map(mark => mark - 1);
console.log(deductedMarks);

// get a new array of marks where even marks are deducted by 1 and odd marks are deducted by 2 from the marks array.
const ans = marks.map(mark => mark % 2 === 0 ? mark - 1 : mark - 2);
console.log(ans);