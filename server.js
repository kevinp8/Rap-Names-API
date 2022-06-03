const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000

app.use(cors())

const rappers = {
    '21 savage': {
        age: 29,
        birthName: 'Sheyaa Bin Abraham-Joseph',
        birthLocation: 'London, England'
    },
    'chance the rapper': {
        age: 29,
        birthName: 'Chancelor Bennett',
        birthLocation: 'Chicago, Illinois'
    },
    dylan: {
        age: 29,
        birthName: 'Dylan',
        birthLocation: 'Dylan'
    }
}

app.listen(process.env.port || port, ()=> {
    console.log('Server Now Running')
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    console.log('GET success')
})
app.get('/public/main.js', (req, res) => {
    res.sendFile(__dirname + '/public/main.js')
    console.log('GET success')
})

app.get('/api/:rapperName', (req, res) => {
    const rapper = req.params.rapperName.toLowerCase()
    if(rapper in rappers) res.json(rappers[rapper])
    else res.json({birthName: 'Not Found'})
})