const fs = require('fs');

const writeStream = fs.createWriteStream('FileSystem/writeme2.txt');
writeStream.on('finish', ()=>{
    console.log('파일 쓰기 완료되었음.');
});


writeStream.write('이 글을 씁니다. \n');
writeStream.write('응 뭐라고?. \n');