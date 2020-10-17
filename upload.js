const fs = require('fs')
const express = require('express')
const app = express()
const port = 8000

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = + Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', upload.single('image'), (req, res) => {
    console.log(req.file)

    res.end()
})

app.listen(port, () => {
    console.log(`Port on ${port}`)
})