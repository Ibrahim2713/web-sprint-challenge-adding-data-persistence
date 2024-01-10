const express = require('express')
const TaskRouter = require('./task/router')
const ResourceRouter = require('./resource/router')
const ProjectRouter = require('./project/router')

const server = express()

server.use(express.json())

server.use('/api/tasks', TaskRouter )
server.use('/api/resources',ResourceRouter )
server.use('/api/projects', ProjectRouter )


module.exports = server

// build your server here and require it from index.js

