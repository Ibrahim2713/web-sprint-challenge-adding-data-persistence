// start your server here

const server = require('./api/server.js')

const port = 9000

server.listen(port, () => console.log('server is up and running'))