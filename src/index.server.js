const express = require('express')
const app = express();
var cors = require('cors')

const mainRoute = require('./routes/mainRoute');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(express.json());

app.use('/api', mainRoute)

const PORT = process.env.PORT || 7000
app.listen(PORT, () => {
    console.log(`PORT is ${PORT}`)
}) 
