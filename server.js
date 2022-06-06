const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 5000

app.use(cors())

let chicagoBears = {
    'offense': {
        'quarterback': 'Justin Fields',
        'running back': 'David Montgomery',
        'wide receiver': 'Darnell Mooney',
        'tight end': 'Cole Kmet',
        'center': 'Sam Mustipher',
        'guard': 'Larry Borom',
        'offensive tackle': 'Tevin Jenkins'
    },
    'defense': {
        'defensive end': 'Mario Edwards Jr.',
        'defensive tackle': 'Justin Jones',
        'linebacker': 'Roquan Smith',
        'cornerback': 'Jaylon Johnson',
        'safety': 'Jaquan Brisker'
    },
    'special teams': {
        'kicker': 'Cairo Santos',
        'punter': 'Trenton Gill',
        'long snapper': 'Patrick Scales'
    },
    'unknown': {
        'unknown': 'unknown'
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:position', (req, res) => {
    const bearsPosition = req.params.position.toLowerCase()
    if(chicagoBears[bearsPosition]){
        res.json(chicagoBears[bearsPosition])
    }else{
        res.json(chicagoBears['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on server ${PORT}`)
})