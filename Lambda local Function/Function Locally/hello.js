var request = require('request');


console.log('loading lambda function');
exports.handler=(event, context, callback) => {
console.log('hello'+event.name);
callback(null,'hello'+event.name)
};