const EventEmitter = require('events'); // common practice is to call this import "EventEmitter"

const customEmitter = new EventEmitter(); // instace of event class

customEmitter.on('response', (name, id) => { // when this event takes place, to this:
    console.log(`Data Received! You are #${id}: ${name}`);
}); 

customEmitter.on('response', () => {
    console.log(`data received`);
});

customEmitter.on('response', () => {
    console.log(`DaTa ReCeIvEd`);
});
// we can have as many functions as we want for each event

customEmitter.emit('response', 'joe', 30); // response is the name of the event to be emitted
// the order matters, event must be first created using .on and then emitted or executed using .emit
// the values that follow the event's name are the arguments, which there can be 0 or more of