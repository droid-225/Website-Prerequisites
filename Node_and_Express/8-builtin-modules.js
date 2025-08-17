// Built-In Modules
// No install necessary

// OS
// Provides many properties and methods for interacting with the OS
const os = require('os'); // Destructuring also works, i.e., const {} = require{'os'};

// Info about current user
const user = os.userInfo();
//console.log(user);

// System uptime in seconds (how long the system has been running)
//console.log(`System Uptime: ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()  
}

//console.log(currentOS);


// PATH
const path = require('path');

//console.log(path.sep); // Prints the separator symbol in the path

const filePath = path.join('/content', 'subfolder', 'test.txt'); // joins seperate file locations into a singular filepath using the system's seperator symbol
//console.log(filePath);

const base = path.basename(filePath);
//console.log(base); // Prints the final file in the filepath

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt'); // Creates absolute path to the target file
//console.log(absolute);


// FS
// Can be done asynchronously (non-blocking) and synchronously (blocking)

// Sync
/*
const {readFileSync, writeFileSync} = require('fs'); // Only imports the readFileSync and writeFileSync methods from the FS module
// Generally we use UTF-8 as the encoding for files by default.

const first = readFileSync('./content/first.txt', 'utf8'); // It is already set to utf8 by defualt if the parameter is left empty
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second);

//writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`); // Overwrites contents in the given file
// If file does not exist, it creates it first and then writes to it.

writeFileSync(
    './content/result-sync.txt', 
    `\nHere is the result: ${first}, ${second}`,
    {flag: 'a'}
); // flag: 'a' allows the contents to be appended ot the file.
*/

// Async
/*
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => { // utf8 encoding required here (could be others but needs to be specified)
    if(err) {
        console.log(err);
        return; // Same thing as saying return null;
    }

    const first = result;
    //console.log(result);

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }

        const second = result;
        //console.log(result);

        writeFile(
            './content/result-async.txt', 
            `\nHere is the result: ${first}, ${second}`,
            {flag: 'a'},
            (err, result) => {
                if(err) {
                    console.log(err);
                    return;
                }
            }
        );
    });
});
*/


// HTTP

const http = require('http');

const server = http.createServer((req, res) => {
    // req : incoming requiest
    // res : outgoing response

    //console.log(req);
    
    if(req.url === '/') {
        res.end('Welcome to the Home Page!');
    }
    else if(req.url === '/about') {
        res.end('About Us!');
    }
    else {
        res.end(`
            <h1>Oops!</h1>
            <p>The page you are looking for does not Exist!</p>
            <a href="/">Go Back Home!</a>
        `);
    }

    //res.write('Hello World!');
    //res.end();
});

server.listen(5050);