// createReadStream 은 data, end, error 이벤트 리스너 사용함, 

const fs = require('fs');

const readStream = fs.createReadStream('FileSystem/readme3.txt', { highWaterMark: 16}); // hightwat 이 부분이 버퍼 크기 설정하는 부분 
const data = [];

readStream.on('data', (chunk)=>{
    data.push(chunk);
    console.log('data :', chunk, chunk.length);
})

readStream.on('end', ()=>{
    console.log('end :', Buffer.concat(data).toString());
})

readStream.on('error', (err)=>{
    console.log('error :', err);
})