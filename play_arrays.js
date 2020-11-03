// The regular nodejs program (non scheduled instructions) runs as a single thread

// synchronous code
const { getOddElements, getEvenElements, even } = require('./mathematical_arrays');

const elements = [6, 5, 3, 8, 9, 10, 3, 2, 7];

console.log('Get even elements');
console.log(getEvenElements(elements));

console.log('Get odd elements');
console.log(getOddElements(elements));

// schedule an execution in the nodejs program

// Nodejs will add the callback of these setTimeouts in a Timers queue (event queues) (maintained by the nodejs system)
// And an event loop will check for these event queues

// asynchronous code
setTimeout(() => {
    console.log(getOddElements(...[6, 5, 3, 8, 9, 10, 3, 2, 7]));
}, 10000);

setTimeout(() => {
    console.log(getOddElements(...[10, 5, 3, 8, 3, 4, 3, 2, 9]));
}, 5000);
// the callback given to the settimeout function is scheduled to run after 3 secs. May run on the 4th sec, 5th sec,
// do not know. Depends when does the event loop get to the timers queue to execute the callbacks

// setInterval - the callbacks will go in the Timers event queue (which will then be checked by the event loop)

// console.log(getOddElements(6, 5, 3, 8, 9, 10, 3, 2, 7));
// console.log(getOddElements(...[6, 5, 3, 8, 9, 10, 3, 2, 7]));

// synchronous code
// non scheduled instructions which are executed right away
const r = 89;
console.log(even(r));
