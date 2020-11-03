const fs = require('fs');

let clientId = 0;

// IO operation
function readFile(filePath) {
    clientId++;
    console.log(`********Request to read from the file ${filePath} being processed for client ${clientId}*******`);
    // IO that needs no CPU
    // blocking IO
    /* const data = fs.readFileSync(filePath, {
        encoding: 'utf-8',
    }); */

    // A separate kernel level thread is scheduled to perform reading from a file
    // It is no longer the job of the event loop to read from file
    // non blocking IO
    fs.readFile(filePath, {
        encoding: 'utf-8'
    }, (err, data) => {
        // When the kernel level thread finishes the IO, it will place this callback function
        // in the IO events callback queue
        // the event loop first sees the timers queue and then comes to the IO events callback queue
        if (err) {
            console.log(err);
        } else {
            console.log(data);
            console.log(`*******Request to read from the file ${filePath} for client ${clientId} is processed********`); 
        }
    });
}

// CPU operation
function generateOddSeries(n) {
    clientId++;
    console.log(`********Request to generate odd series till ${n} being processed for client ${clientId}*******`);
    let series = '';
    for (let i = 1; i <=n; i = i + 2) {
        series += i + '\t';
    }
    console.log(`********Request to generate odd series till ${n} processed for client ${clientId}*******`);
    return series;
}

// simulate multiple clients (7) hitting this nodejs program to read from different paths
setTimeout(() => {
    readFile('./arrays.js');
}, 0);
setTimeout(() => {
    readFile('./firstone.js');
}, 0);
setTimeout(() => {
    readFile('./functions.js');
}, 0);
setTimeout(() => {
    readFile('./mathematical_arrays.js');
}, 0);
setTimeout(() => {
    readFile('./more_arrays.js');
}, 0);
setTimeout(() => {
    readFile('./more_functions.js');
}, 0);
setTimeout(() => {
    readFile('./play_arrays.js');
}, 0);

// simulate multiple clients (2) hitting this nodejs program for generating odd series
setTimeout(() => {
    console.log(generateOddSeries(500));
}, 0);

setTimeout(() => {
    console.log(generateOddSeries(400));
}, 0);
