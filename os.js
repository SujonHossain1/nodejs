const os = require('os');

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.freemem() / Math.pow(1024, 3));
console.log(os.homedir());
console.log(os.networkInterfaces());
console.log(os.version());
console.log(os.userInfo());
console.log(os.cpus());
