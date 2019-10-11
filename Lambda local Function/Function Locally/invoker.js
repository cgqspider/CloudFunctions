var lambdaFunction = require('./hello');
var functionHandler = 'handler';

var event ={name:'narayan'};
var context={};


function callback(error, data)
{
    console.log(error);
    console.log(data);
}


lambdaFunction[functionHandler](event,context,callback);