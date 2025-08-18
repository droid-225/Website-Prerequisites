// npm : global command, comes with node
// Check version: npm --version

// Two Types:
// local dependency : use it only in this particular project
// npm i <packageName> // i stand for install, you can also just write out install instead of just i

// global dependecy : use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> // for MAC and if windows is acting stupid

// package.json : manifest file (stores important info about project/package)
// -> manual approach: create package.json IN THE ROOT, create properties, etc.
// -> npm init (step by step, press enter to skip)
// -> npm init -y (everything default)

const _ = require('lodash'); // common import syntax

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // Just testing out imported function from lodash

console.log(newItems);