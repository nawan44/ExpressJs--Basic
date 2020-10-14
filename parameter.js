const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/user/:userId/book/:bookId', (req, res) => {
    console.log(req.params.userId, req.params.bookId)
    res.send(' ')
})

// app.get('/user/:id', (req, res) => {
//     console.log(req.params.id)
//     res.send(' ')
// })

// app.get('/:name', (req, res) => {
//     console.log()
//     res.send('Hello ' + req.params.name)
// })

// app.get('/:name', (req, res) => {
//     console.log(req.params.name)
//     res.send('Hello ')
// })

// app.get('/:name', (req, res) => {
//     console.log(req.params.name)
//     res.send('get request')
// })

app.post('/', (req, res) => {
    console.log(req.body)
    res.send('post request')
})

app.put('/', (req, res) => {
    res.send('put request')
})

app.listen(port, () => {
    console.log(`Routing On ${port}`)
})