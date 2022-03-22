const express = require('express')

const app = express()

const router = require('./routes.js')

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('pug', require('pug').__express)

app.set('views', './views/')
app.set('view engine', 'pug')

app.use('/', router)
app.use('/static', express.static(__dirname + '/public'))
