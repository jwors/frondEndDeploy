const http = require('node:http')
const fs = require('node:fs')

const html = fs.readFileSync('./hello.html')

const server = http.createServer((req, res) => {
    fs.createReadStream('./hello.html').pipe(res)
})
server.listen(3000, () => {
    console.log('Listening 3000');
})