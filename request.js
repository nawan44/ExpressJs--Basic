const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('./', (req, res) => {
    console.log(req.query)
    res.send('get request')
})

app.post('./', (req, res) => {
    console.log(req.body)
    res.send('post request')
})

app.put('./', (req, res) => {
    res.send('put request')
})

app.listen(port, () => {
    console.log(`Routing On ${port}`)
})