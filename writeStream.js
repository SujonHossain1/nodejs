const fs = require('fs');

const ourCreateStream = fs.createReadStream(`${__dirname}/myFile.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourCreateStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

ourCreateStream.pipe(ourWriteStream);
