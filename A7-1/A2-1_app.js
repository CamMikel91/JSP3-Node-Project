// Require the EventEmitter class and the logger class
const EventEmitter = require('events');
const Logger = require('./A2-1_logger');

// Create a new instance of the logger class
const logger = new Logger();

// Create event listeners for the logger class
logger.on('firstCatch', () => console.log('First Listener Called!\n'));
logger.on('secondCatch', () => console.log('Second Listener Called!\n'));
logger.on('thirdCatch', () => console.log('Third Listener Called!\n'));

// Trigger the event listeners
logger.firstCatch('Calling First Listener...');
logger.secondCatch('Calling Second Listener...');
logger.thirdCatch('Calling Third Listener...');