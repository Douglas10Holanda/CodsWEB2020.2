var http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Ola mundo!\n')
})
var port = 8082;
var hostname = "localhost"

process.argv.forEach((val, index) =>{
    console.log(index + " <-> " + val)
})
console.log(process.argv.slice(2))

server.listen(port, hostname, () => {
    console.log("Server running at http://" + hostname + ":" + port)
})