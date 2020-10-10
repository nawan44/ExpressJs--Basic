const express = require('express')
const app = express()
const port = 8080

app.get('./', (req, res) => {
    res.send('get request')
})

app.post('./', (req, res) => {
    res.send('post request')
})

app.put('./', (req, res) => {
    res.send('put request')
})

app.delete('./', (req, res) => {
    res.send('delete request')
})


app.listen(port, () => {
    console.log(`Example routing ${port}`)
})