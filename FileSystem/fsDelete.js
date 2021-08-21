const fs = require('fs').promises;

fs.readdir('FileSystem/folder') // readdir =>폴더 안의 내용물을 확인할 수 있음. 
    .then((dir)=>{
        console.log('폴더 내용 확인' , dir);
        return fs.unlink(`FileSystem/folder/${dir}`); // unlink -> 파일 삭제 
    })
    .then(()=>{
        console.log('파일 삭제 성공');
        return fs.rmdir('FileSystem/folder'); // rmdir => 딕셔너리(파일) 삭제 
    })
    .then(()=>{
        console.log('폴더 삭제 성공');
    })
    .catch((err)=>{
        console.error(err);
    });
