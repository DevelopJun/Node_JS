const fs = require('fs');

fs.readFile('FileSystem/readme.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data); // 이러면 buffer 반환 
    console.log(data.toString()); // buffer 데이터 문자열 변환 
})
// 근데 위와 같은 fs는 기본적으로 콜백 함수로 실무에서 사용하기 힘들다 따라서, 
// fs모듈 promise형태로 

const fs = require('fs').promises;
fs.readFile('FileSystem/readme.txt')
    .then((data)=>{
        console.log(data);
        console.log(data.toString());
    })
    .catch((err)=>{
        console.log(err);
    })