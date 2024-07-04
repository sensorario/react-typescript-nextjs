const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    const currentPath = '.' + req.url
    const filePath = currentPath === './'
        ? './index.html'
        : currentPath
    const extension = path.extname(filePath)
    const contentType = extension === '.js'
        ? 'text/javascript'
        : 'text/html'
    console.log(extension)
    fs.readFile(filePath, (error, content) => {
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content, 'utf-8')
    })
})

server.listen(3000, () => console.log(`Server: http://localhost:3000`))