const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    setTimeout(() => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ foo: 'doooo' }));
    }, 20000);
});

const PORT = 3001; // Puoi cambiare la porta se necessario
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
