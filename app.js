const express = require('express')
const app = express()
const path = require('path');
const port = 8080

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
})

app.get('/books', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/books/index.html'));
})

app.get('/books/add', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/books/add.html'));
})

app.get('/books/list', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/books/list.html'));
})

app.get('/people', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/people/index.html'));
})

app.get('/people/add', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/people/add.html'));
})

app.get('/people/list', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/people/list.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})