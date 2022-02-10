const express = require('express');
const path = require('path')
const app = express();
const PORT = 3030;


app.use(express.static('img'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/Views/index.html')))
app.get('/babbage', (req, res) => res.sendFile(path.join(__dirname, '/Views/babbage.html')))
app.get('/berners-lee', (req, res) => res.sendFile(path.join(__dirname, '/Views/berners-lee.html')))
app.get('/clarke', (req, res) => res.sendFile(path.join(__dirname, '/Views/clarke.html')))
app.get('/hamilton', (req, res) => res.sendFile(path.join(__dirname, '/Views/hamilton.html')))
app.get('/hopper', (req, res) => res.sendFile(path.join(__dirname, '/Views/hopper.html')))
app.get('/lovelace', (req, res) => res.sendFile(path.join(__dirname, '/Views/lovelace.html')))
app.get('/turing', (req, res) => res.sendFile(path.join(__dirname, '/Views/turing.html')))



app.listen(PORT, () => console.log("Server On"));