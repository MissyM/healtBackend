
var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.post('/login', (req, res) => {
  console.log(req.body)
  res.json(req.body)
})

app.get('/group', (req, res) => {
  res.json({})
})

app.put('/group', (req, res) => {
  res.json(req.body)
})

app.get('/group/:id', (req, res) => {
  res.json({id: req.params.id, casa: 'blanca'})
})

app.delete('/group/:id', (req, res) => {
  res.json({})
})

app.listen(3001, () => {
  console.log('Example app listening on port 3001!')
})
