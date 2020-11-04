/**
 * A module that is suppose to export a utility copy function
 * that takes in source, destination as parameters and performs the copying operation
 */

const { EventEmitter } = require('events');
const fsPromises = require('fs').promises;

exports.copyFile = function (source, destination) {
    // publisher - subscriber pattern
    // Events and EventEmitter
    const eventEmitter = new EventEmitter();

    fsPromises.readFile(source, {
        encoding: 'utf-8'
    }).then((data) => {
        eventEmitter.emit('readDone', source);
        return fsPromises.writeFile(destination, data);
    }).then(() => {
        eventEmitter.emit('done', destination);
    })
    .catch((err) => {
        console.log(err);
        eventEmitter.emit('error', err);
    });

    return eventEmitter;
};