const fs = require('fs');

const readStream = fs.createReadStream('FileSystem/readme4.txt');
const writeStream = fs.createWriteStream('FileSystem/writeme3.txt');
readStream.pipe(writeStream);