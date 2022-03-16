/*
    Event Driven Programming is heavily used in nodeJs

    Methodology : 
        1- Subscribe an event
        2- Register a function to this event
        3- Listen for specific event
        4- Execute this function in response of this event


    on   : listen for an event
    emit : emit an event
*/

const eventEmitter = require('events');

const myEmitter = new eventEmitter();

// we can name our events by changing the 'response' string
// in this case the name of the event is 'response'
myEmitter.on('response', ()=>{
    console.log(`data received`);
});
myEmitter.emit('response');

/* -------------------- another example -------------------- */
// sucsribe an event and name it as 'enivicivokki'
myEmitter.on('enivicivokki', ()=>{
    // this function is registered to 'enivicivokki' event
    console.log(`enivicivokki data received`);
});
// emit the event
myEmitter.emit('enivicivokki');