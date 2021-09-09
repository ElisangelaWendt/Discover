const express = require("express")
const server = express()
const routes = require("./routes")
//para iniciar: npm run dev
server.set('view engine', 'ejs')

server.use(express.static("public"))

//usar req body
server.use(express.urlencoded( {extended: true}))

//routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))