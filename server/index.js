const express = require('express')
const app = express()
const {PORT, CLIENT_URL} = require('./constants')
const cors = require('cors')

const corsOptions = {
    origin: CLIENT_URL,
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.listen(PORT, () => {
    console.log(`Back end is listening on port ${PORT}`)
})