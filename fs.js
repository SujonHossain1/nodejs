const fs = require('fs');

fs.writeFile(
    'programmer.txt',
    'Hello Programmers, I have a good day. ',
    (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('love.txt file created successfully!');
    }
);

fs.appendFile(
    'programmer.txt',
    'Always try to learn more about',
    'utf8',
    (err) => {
        if (err) {
            console.log(err);
        }
    }
);

fs.readFile('programmer.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

fs.rename('programmer.txt', 'javascript.txt', (err) => {
    if (err) {
        console.log(err);
    }
});

fs.unlink(`javascript.txt`, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('File Deleted Successfully!');
});
