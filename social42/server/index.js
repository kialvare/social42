const path = require('path')
const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send('hello')
})

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
