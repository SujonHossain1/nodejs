const Message = require('./message');
const message = new Message();

// message events
message.on('message', (msg) => {
    console.log('Toma Send a message: ' + msg);
});
message.sendMessage();

// call events
message.on('call', (msg) => {
    console.log(msg);
});
message.makeCall();
