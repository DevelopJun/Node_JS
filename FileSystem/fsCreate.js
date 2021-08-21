const fs = require('fs').promises;
const constants = require('fs').constants;

fs.access('FileSystem/folder', constants.F_OK | constants.W_OK | constants.R_OK) // 파일 존재여부, 쓰기여부, 읽기여부 판단 파일/폴더 권한 없으면 에러코드 ENOENT 들고옴. 
    .then(()=>{
        return Promise.reject('이미 폴더 있음');
    })
    .catch((err)=>{
        if(err.code === 'ENOENT'){
            console.log('폴더없음');
            return fs.mkdir('FileSystem/folder');
        }
        return Promise.reject(err);
    })
    .then(()=>{
        console.log('폴더 만들기 성공');
        return fs.open('FileSystem/folder/file.js', 'w');
    })
    .then((fd)=>{ // fd 변수는 파일의 아이디 들고 오는 것임. 
        console.log('빈 파일 만들기 성공', fd);
        return fs.rename('FileSystem/folder/file.js', 'FileSystem/folder/newfile.js');
    })
    .then(()=>{
        console.log('이름 바꾸기 성공');
    })
    .catch((err)=>{
        console.log(err);
    });