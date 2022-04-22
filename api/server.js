// build your server here and require it from index.js
const express = require('express')
const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/recipes', projectRouter)
server.use('/api/recipes', resourceRouter)
server.use('/api/recipes', taskRouter)

server.use('*', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server