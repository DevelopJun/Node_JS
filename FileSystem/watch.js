// 파일/폴더 변경사항 감시 하는 watch 메소드 

const fs = require('fs');

fs.watch('FileSystem/target.txt', (eventType, filename)=>{
    console.log(eventType, filename);
});
