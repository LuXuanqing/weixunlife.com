'use strict'
const express = require('express')
const port = 80

var app = express()
var server = app.listen(port, () => {
  var host = server.address().address
  var port = server.address().port
  console.log(`Home page is running at http://${host}:${port}`)
})

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('/index.html')
})
