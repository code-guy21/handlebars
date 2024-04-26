const express = require('express');
const { engine } = require('express-handlebars');

const path = require('path');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/api', function (req, res) {
	res.send('welcome to my API!');
});

// app.get('/', function (req, res) {
// 	let websitePath = path.join(__dirname, './public/index.html');

// 	res.sendFile(websitePath);
// });

app.get('/', function (req, res) {
	res.render('homepage');
});

app.get('/dashboard', function (req, res) {
	res.render('dashboard');
});

app.get('/login', function (req, res) {
	res.render('login');
});

app.listen(3000);
