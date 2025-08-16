// First Module
// Module for 3-modules file

const secret = `TOP SECRET`; // local (not exported [not shared])
const john = `John`; // global (shared / exported)
const peter = `Peter`; // global (shared / exported)

//console.log(module); // prints info about the module (current file)

module.exports = {john, peter}; // basically passing an object containing the names to be exported