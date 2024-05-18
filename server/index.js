const express = require('express')
const app = express()
const port = 8080

app.use('/', (req, res) => {
    console.log('This is the main URL')
})

app.listen(port, () => {
    console.log(`Back end is listening on port ${port}`)
})