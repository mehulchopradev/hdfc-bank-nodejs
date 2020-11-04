const { copyFile } = require('./copy-util');

const SOURCE = './arrays.js';
const DESTINATION = './arrays-copy.js';

const copyEmitter = copyFile(SOURCE, DESTINATION); // async IO operation

// copyEmitter in the future will emit out events like readDone, done, and error
// subscribe to these events

// It is not compulsory to subscribe for all the events
copyEmitter.on('readDone', (source) => {
    console.log(`Reading operation from the copying operation done for source file ${source}`);
});

copyEmitter.on('done', (destination) => {
    console.log(`File copied to destination ${destination}`);
});

copyEmitter.on('error', (err) => {
    console.log(err);
});

// other subscribers who alo want to know whether the copying is done or no
setTimeout(() => {
    copyEmitter.on('done', (destination) => {
        console.log(`File copied to destination ${destination} as seen by subsriber 2`);
    }); 
}, 0);

setTimeout(() => {
    copyEmitter.on('done', (destination) => {
        console.log(`File copied to destination ${destination} as seen by subsriber 3`);
    }); 

    copyEmitter.on('readDone', (source) => {
        console.log(`Reading operation from the copying operation done for source file ${source} as seen by subscriber 3`);
    });
}, 0);