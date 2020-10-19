const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/user', require('./routes/user'))

app.listen(port, () => {
    console.log(`Port on:${port}`)
})