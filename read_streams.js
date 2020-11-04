const fs = require('fs');

const SOURCE = './functions.js';

const readStream = fs.createReadStream(SOURCE, {
    encoding: 'utf-8',
    highWaterMark: 1 * 1024 // chunks in the order of 1kb will be fetched
});
// readStream is an EventEmitter

readStream.on('open', () => {
    console.log('File opened for reading');
});

readStream.on('error', (err) => {
    console.log(err);
});

readStream.on('data', (chunk) => {
    console.log('Chunk received');
    // this event can be called multiple times
    console.log(chunk);
});

readStream.on('close', () => {
    console.log('Read stream closed');
});