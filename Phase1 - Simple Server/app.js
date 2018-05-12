const express = require('express');
const app = express();

const port = process.env.port || 3000;
//Ports are usually set through enviroment variables
//Set to 3000 if env variable not exists

app.get('/', function(req, res) {
	res.send('<html> <head> <h1> First Page </h1> </head> <body> Hello world </body> </html>');
});

app.get('/name', function(req, res) {
	res.json({
		firstName: 'John',
		lastName: 'Doe'
	});
});

app.get('/home/:name/:lastName', function(req, res) {
	res.send('<html> <head> <h1> First Page </h1> </head>' + 
		'<body> Hello ' + req.params.name + ' ' + req.params.lastName  + '</body> </html>')
});

app.listen(port);
console.log('Listening on port: ' + port)