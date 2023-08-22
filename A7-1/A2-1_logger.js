// Import the events module
const EventEmitter = require('events');

// Create a class that extends EventEmitter
class Logger extends EventEmitter {
    // Create a method that will be used as the first catch
    firstCatch(message) {
        // Log a message to the console
        console.log(message);
        // Emit the firstCatch event
        this.emit('firstCatch');
    }

    // Create a method that will be used as the second catch
    secondCatch(message) {
        // Log a message to the console
        console.log(message);
        // Emit the secondCatch event
        this.emit('secondCatch');
    }

    // Create a method that will be used as the third catch
    thirdCatch(message) {
        // Log a message to the console
        console.log(message);
        // Emit the thirdCatch event
        this.emit('thirdCatch');
    }
}

// Export the Logger class
module.exports = Logger;