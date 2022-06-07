const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('WELCOME RIYA TO HOME PAGE')
    }
    if (req.url === '/about') {
        res.end('HERE IS OUR HISTORY ON ABOUT PAGE')
    }
   res.end
        (
            `<h1> OOPS!! </h1>
            <p> Can't find that page at all</p>
            <a href="/" >Back Home</a>`
        )
})

server.listen(5000)
