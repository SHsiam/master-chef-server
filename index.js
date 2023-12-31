const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors')

const chef = require('./data/chef.json');

app.use(cors())

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const chefData = chef.find(n => n.id == id);
    res.send(chefData)
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})