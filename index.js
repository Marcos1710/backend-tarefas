const app = require('express')()

app.get('/', (req, res) => {
    res.status(200).send('Iniciado Backend!')
})

app.listen(3000, () => {
    console.log('Backend Executando...')
})