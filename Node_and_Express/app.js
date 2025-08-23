const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000
});

stream.on('data', (result) => { // treated like an event
    console.log(result);
}); // data divides the data in the given file into chunks, to a max of 64 kb (65486 bytes) per chunk by default
// the 'data' event comes with createReadStream
// last buffer: remainder
// highWaterMark: controls size of each chunk
// const stream = createReadStream('file location', {highWaterMark: value in bytes});
// const stream = createReadStream('file location', {encoding: 'utf8'}); lets you actually see the content of the file

stream.on('error', (err) => console.log(err)); // error control