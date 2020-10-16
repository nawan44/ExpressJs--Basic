const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// app.get('/', (req, res) => {
//     res.send(' ')
// })

// app.get('/', (req, res) => {
//     res.json({
//         message: "Success",
//         code: 200,
//         error: false
//     })
// })

// app.get('/', (req, res) => {
//     res.redirect('https://google.com')
// })

// app.get('/user/:id', (req, res) => {
//     res.send('User with ID: ' + req.params.id)
// })
// app.get('/', (req, res) => {
//     res.download('./report.txt')
// })

app.get('/', (req, res) => {
    res.sendStatus(404)
})

// app.get('/user/:id', (req, res) => {
//     res.send('User with ID: ' + req.params.id)
// })

app.listen(port, () => {
    console.log(`Routing On ${port}`)
})