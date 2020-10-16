const express = require('express')
const app = express()
const port = 8000

const middlewares = require("./middlewares")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(middlewares)
// const maintenance = (req, res, next) => {
//     if (fs.existsSync("./down")) {
//         res.send(" Under Maintenance")
//     } else {
//         next()
//     }
// }

// const log = (req, res, next) => {
//     console.log('Request Body', req.body)
//     console.log('URL Params', req.params)
//     console.log('URL query', req.query)
//     next()
// }

// const middlewares = [maintenance, log]

app.get('/', (req, res) => {
    res.sendStatus(200)
})
app.post('/', (req, res) => {
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Routing On ${port}`)
})