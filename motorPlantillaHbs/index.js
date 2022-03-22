const express = require('express')

// Cargo el módulo handlebars

const { engine } = require('express-handlebars')
const path = require('path')

const app = express()

const router = require('./routes.js')

const PORT = 8080

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on("error", error => console.log(`Error en servidor ${error}`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Establecemos la configuración de handlerbars

app.engine(
  'hbs',
  engine({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.resolve(__dirname, './views/layouts'),
    partialsDir: path.resolve(__dirname, './views/partials')
  })
)
// Establecemos el motor de plantilla que se utiliza
app.set('view engine', 'hbs')
// Establecemos el directorio donde se encuentran los archivos de plantilla
app.set('views', './views/')


app.use('/', router)
app.use('/static', express.static(__dirname + '/public'))
