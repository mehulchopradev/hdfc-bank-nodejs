const fs = require('fs');

const SOURCE = './functions.js';
const DESTINATION = './functions-copy.js';

const readStream = fs.createReadStream(SOURCE, {
    encoding: 'utf-8',
    highWaterMark: 1 * 1024 // chunks in the order of 1kb will be fetched
});
// readStream is an EventEmitter

const writeStream = fs.createWriteStream(DESTINATION, {
    encoding: 'utf-8'
});
// writeStream is an EventEmitter

readStream.pipe(writeStream);

/* readStream.on('open', () => {
    console.log('File opened for reading');
});

writeStream.on('open', () => {
    console.log('File opened for writing');
});

readStream.on('error', (err) => {
    console.log(err);
});

writeStream.on('error', (err) => {
    console.log(err);
});

readStream.on('data', (chunk) => {
    console.log('Chunk received');
    // this event can be called multiple times
    // console.log(chunk);
    writeStream.write(chunk);
});

readStream.on('close', () => {
    console.log('Read stream closed');
    // readstream gets auto closed. That is why this close event gets called
    writeStream.close(); // write stream does not auto close. We need to close it
});

writeStream.on('close', () => {
    console.log('Write stream closed');
}); */
