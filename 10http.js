const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home Page')
    } else
    if (req.url === '/about') {
        res.end('About our company')
    } else
    res.end(`
        <h1>Oops!!</h1>
        <p>Seems like this page doesn't exist</p>
        <a href="/">Back to Home</a>
    `)
})

server.listen(5000);