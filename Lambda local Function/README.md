<h1>Introduction</h1>
1.This is one tmplate example for the Lamda function which can be used in the future to work with the lambda function. This function works locally and to do so just use node invoker.js command inside it and thats it. Your function is working.
<br>
2. If you are facing the problem of dependency then still dont worry use Layer in lambda layer. follow these steps to use layer in aws.<br>
* create one folder lambda_layer -> Nodejs (folder).<br />
* cd lambda_layer/Nodejs <br />
* npm init (npm install --save moment) or (npm install mysql --prefix ./)<br />
* cd ../ and zip the Nodejs folder.<br />
* Go to layer section inside the lambda function.<br />
* create one layer inside that and upload the Nodejs.zip that we created.<br/>
*   Use that layer for the particular function.<br/>


<h2>REF:</h2>
1. Running Lambda Function Locally :<br> https://www.youtube.com/watch?v=eFIhvKjdISg<br>
2. Using Layers AWS for dependency manager: <br>
* https://medium.com/@anjanava.biswas/nodejs-runtime-environment-with-aws-lambda-layers-f3914613e20e<br>
* https://www.freecodecamp.org/news/lambda-layers-2f80b9211318/<br />
* https://www.youtube.com/watch?v=ukCEhjXnB60<br/>

<h2>Lambda function trigger with s3</h2>

https://youtu.be/EsqjHDpLpB4

