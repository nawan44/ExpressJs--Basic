const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index.ejs', {
        name: 'Rachmat'
    })
})


app.listen(port, () => {
    console.log(`Port on:${port}`)
})