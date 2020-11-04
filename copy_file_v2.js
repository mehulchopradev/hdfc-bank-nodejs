const fsPromises = require('fs').promises;

const SOURCE = './arrays.js';
const DESTINATION = './arrays-copy.js';

/* fsPromises.readFile(SOURCE, {
    encoding: 'utf-8'
}).then((data) => {
    return fsPromises.writeFile(DESTINATION, data);
}).then(() => {
    console.log('Copying done!');
})
.catch((err) => {
    console.log(err);
}); */

async function copyFile() {
    const data = await fsPromises.readFile(SOURCE, {
        encoding: 'utf-8'
    });
    await fsPromises.writeFile(DESTINATION, data);
    console.log('Copying done!');
}

copyFile()
    .catch((err) => {
        console.log(err);
    });

// sync code