//Importando express e nunjucks
const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

//Criando a o server e atribuindo-lhe o express
const server = express()

//Parte middlewares da página
server.use(express.static('public'))
server.use(routes)

//Setando o view engina
server.set("view engine", "njk")

//Configuração Nunjucks
nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache:true
})


//Rodar o servidor
server.listen(5000, function() {
    console.log('server is running')
})