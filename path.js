const path = require('path');
// console.log(path);
// console.log(path.win32);
// console.log(path.resolve());

const url = 'C:/Users/User/Desktop/nodejs/server.js';

const filename = path.basename(url);
console.log(filename);
console.log(path.delimiter);

console.log(path.dirname(url));
console.log(path.extname(url));
console.log(path.isAbsolute(url));
console.log(path.join(url, 'love'));
console.log(path.normalize(url));
console.log(path.parse(url));
console.log(path.posix);
console.log(process.env.PATH);
console.log(process.env.PATH.split(path.delimiter));
