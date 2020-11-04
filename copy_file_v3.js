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

// async-await (Write Promise asynchronous code in a synchronous manner)
async function copyFile() {
    const data = await readFile(); // if there is any error here, the Promise will reject with the error
    await writeFile(data); // if there is any error here, the Promise will reject with the error
    console.log('Copying done!');
    // an async function implicitly returns the Promise object
    return DESTINATION; // Promise will resolve with the DESTINATION
}

copyFile()
    .then((destination) => {
        console.log(`file copied to destination ${destination}`)
    })
    .catch((err) => {
        console.log(err);
    });

// sync code continues
// where to write the code to collect the data that is read
// where to write the code to call the writeFile()