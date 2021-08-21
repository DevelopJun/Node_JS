const http = require('http');
const fs = require('fs').promises

http.createServer(async (req, res)=>{
    try{
        const data = await fs.readFile('Server/server2.html');
        res.writeHead(200, {'Content_type': 'text/plain; charset=utf-8'});
        res.end(data);
    }catch(error){
        console.err(error);
        res.writeHead(500, {'Content_type': 'text/plain; charset=utf-8'}); // text/plain 쓴 이유는 에러가 대부분 그냥 일반 문자열이라서 그런거임. 
        // 여기서 만약에 에러라고 해도 응답을 보내야함. 만약에 응답을 보내지 않으면 클라이언트는 계속해서 이를 기다리다가 Timeout된다. 
        res.end(err.message);
    }
})
.listen(8081, ()=>{
    console.log('8081번 포트에서 대기 중입니다.');
})