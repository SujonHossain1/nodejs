const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(
            `<html>
                <head>
                    <title>Form</title>
                </head>`
        );

        res.end(
            `<body>
                <form action="/process" method="post">
                    <input type="text" name="message" id=""  placeholder="message"/>
                </form>
            </body>
            </html>`
        );
    } else if (req.url === '/process' && req.method === 'POST') {
        const reqData = [];
        req.on('data', (chunk) => {
            const writeStream = fs.createWriteStream('data.txt');
            writeStream.write(chunk);
            reqData.push(chunk);
        });

        req.on('end', () => {
            const processData = Buffer.concat(reqData).toString();

            console.log(processData);
            res.end(processData);
        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});
