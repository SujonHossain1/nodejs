const EventEmitter = require('events');

class Message extends EventEmitter {
    sendMessage() {
        this.emit('message', 'Hi, Sujon. Tumi kothai');
    }
    makeCall() {
        setTimeout(() => {
            this.emit('call', 'Please, sujon pickup the phone');
        }, 2000);
    }
}

module.exports = Message;
