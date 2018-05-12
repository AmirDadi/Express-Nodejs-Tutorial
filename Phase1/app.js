const express = require('express');
const app = express();

const port = process.env.port || 3000;
//Ports are usually set through enviroment variables
//Set to 3000 if env variable not exists


app.get('/', function(req, res) {
	res.send('<html> <head> First Page </head> <body> <h1> Hello world </h1> </body> </html>');
});

app.get('/name', function(req, res) {
	res.json({
		firstName: 'John',
		lastName: 'Doe'
	});
});

app.listen(port);
console.log('Listening on port: ' + port)