const express = require('express')
const app = express()
const PORT = 3030
const path = require('path')


app.use(express.static("public"))

/* INDEX */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
})

/* BABBAGE */
app.get('/babbage', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/babbage.html"))
})

/* BENERS-LEE */
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
})

/* CLARKE */
app.get('/clarke', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/clarke.html"))
})

/* HAMILTON */
app.get('/hamilton', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})

/* HOPPER */
app.get('/hopper', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/hopper.html"))
})

/* LOVELACE */
app.get('/lovelace', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/lovelace.html"))
})

/* TURING */
app.get('/turing', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/turing.html"))
})

app.get('/404', (req, res) => res.send('Error página no encontrada'))


app.listen(PORT, () => {
    console.log(`Servidor levantado http://localhost:${PORT}`);
})