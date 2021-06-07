const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('error', () => {
    console.log('error is happened');
});

emitter.emit('error');
