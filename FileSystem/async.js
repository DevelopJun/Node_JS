const fs = require('fs');

console.log('시작');
fs.readFile('FileSystem/readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('FileSystem/readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('FileSystem/readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});

console.log('끝');
// 현재 이렇게 하면 비동식 방식이라서 순서가 엇갈릴 수 도 있는데 이걸 해결하는 방식은
// 1. 이전 readFile 콜백에 다음 readFile 을 넣거나,
// 2. Promise나 aync/awit 로 막을 수 있따. 
