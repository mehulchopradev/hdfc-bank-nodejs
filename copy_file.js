const fs = require('fs');

const SOURCE = './arrays.js';
const DESTINATION = './arrays-copy.js';

// non blocking IO code
fs.readFile(SOURCE, { // create kernel thread to read from the file
    encoding: 'utf-8'
}, (err, data) => {
    // after finishing reading from the file, the kernel thread
    // puts this callback back to the IO events pending callback queue
    if (err) {
        console.log(err);
    } else {
        fs.writeFile(DESTINATION, data, (err) => { // create kernel thread to write to the file
            // after finishin writing to the file, the kernel thread puts this callback back to the IO events pending
            // callback queue
            if (err) {
                console.log(err);
            } else {
                console.log('Copying done!!');
            }
        })
    }
});