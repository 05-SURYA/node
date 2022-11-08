const http = require('http');

const  server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Hello')
    } else if (req.url === '/about') {
        res.end('About')
    } else {
        res.end(`
            <h1>OOps!!</h1>
            <a href='/'>Back to Home</a>
        `)
    }
})

server.listen(1111)