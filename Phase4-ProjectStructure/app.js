const express = require('express');
const app = express();
const path = require('path');

const routes = require('./presentation')(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './presentation/views'));

app.use('/public', express.static(__dirname + '/statics'));
app.listen(3000);
