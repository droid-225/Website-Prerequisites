//Modules - Encapsulated code (only share minimum)
// Node uses the CommonJS library, in which every file is a module by default

const names = require('./4-name'); // url for import file always starts with './', the higher the file in the hierarchy, the more dots you add
const sayHi = require('./5-utils'); // file name doesn't need the .js file extension if it is a JS file
const data = require('./6-alternative');
//console.log(data);
//console.log(names);

/*
sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
*/

require('./7-mind-grenade'); // This also works with ES6 modules and regular JS
// When you import a module, you invoke it (run it)