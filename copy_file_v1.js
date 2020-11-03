const fs = require('fs');

const SOURCE = './arrays.js';
const DESTINATION = './arrays-copy.js';

// divide your non blocking IO code individually into unit functions
// return a Promise object from each of those functions
// resolve -> then
// reject -> catch
function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(SOURCE, {
            encoding: 'utf-8'
        }, (err, data) => {
            if (err) {
                reject(err);
                // puts the callback given to the .catch in the Promise pending callbacks queue
            } else {
                resolve(data);
                // puts the callback given to the first .then, in the Promise pending callbacks queue
            }
        });
    });
}

function writeFile(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(DESTINATION, data, (err) => {
            if (err) {
                reject(err);
                // puts the callback given to the .catch in the Promise pending callbacks queue
            } else {
                resolve();
                // puts the callback given to the second .then, in the promise pending callbacks queue
            }
        });
    });
}

// get a Promise 1
readFile()
    .then((data) => {
        // subscribing to when Promise 1 resolves in the future
        return writeFile(data); // returning Promise 2
    })
    .then(() => {
        // subsceibe to when Promise 2 resolved in the future
        console.log('Copying done!');
    })
    .catch((err) => {
        // subscribe to when Promise 1 or Promise 2 reject in the future
        console.log(err);
    });

// sync code continues
// where to write the code to collect the data that is read
// where to write the code to call the writeFile()