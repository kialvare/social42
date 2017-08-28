const path = require('path')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
	res.render('home' , {
		title: "Home"
	});
});

app.get('/post', function (req, res) {
	res.send('post')
});

app.get('/tasks', function (req, res) {
	res.send('tasks')
});

app.get('/users', function (req, res) {
	res.send('users')
});

app.get('/calendar', function (req, res) {
	res.send('calendar')
});

app.get('/admin', function (req, res) {
	res.send('admin')
});

//app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
