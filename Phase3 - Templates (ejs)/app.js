const express = require('express');
const app = express();
const path = require('path');

const port = process.env.port || 3000;
let count = 0;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//1
app.use(function(req, res, next) {
	console.log({
		request: {
			url: req.originalUrl,
			method: req.method,
			body: req.body
		}
	});
	next();
});

//2
app.use('/name', function(req, res, next) {
	//Surely it's not a good way to count api calls like this. It's just to show how middleware works.
	count++;
	console.log('url ' + req.originalUrl + ' called ' + count + ' times');
	next();
});


//3
app.use('/public', express.static(__dirname + '/statics'));

app.get('/', function(req, res) {
	res.send('<html> <head> <link href=public/style.css type=text/css rel=stylesheet />'
		+ '</head> <h1> First Page </h1>  <body> Hello world </body> </html>');
});

app.get('/name', function(req, res) {
	res.render('./index', {firstName: 'Ali', lastName: 'Alavi'});
});

app.get('/names', function(req, res) {
	const allNames = [{
		firstName: 'Ali',
		lastName: 'Alavi',
	},
	{
		firstName: 'Hassan',
		lastName: 'Hassani',
	},
	{
		firstName: 'Hossein',
		lastName: 'Hosseini',
	}];
	res.render('./allNames', {allNames});
});


app.get('/home/:name/:lastName', function(req, res) {
	res.send('<html> <head>  </head>' + 
		'<body> <h1> First Page </h1> Hello ' 
		+ req.params.name + ' ' + req.params.lastName 
		 + '</body> </html>');
});


app.listen(port);
console.log('Listening on port: ' + port)