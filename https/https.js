// https 모듈은 웹 서버에 SSL 암호화를 추가한다. 
//GET이나 POST 요청을 할때 오가는 데이터를 암화화해서 중간에 다른 사람이 요청을 가로채더라도 내용을 확인할 수 없게 한다. 
// 요즘은 로그인이나 결제가 필요한 차에서 Https 필수, 
// 따라서 기본적인 http 모듈과 달리, 

const https = require("https"); // 이 부분이 https 설정하는 부분 
const http2 = require("http2"); // 이 부분이 http2 설정하는 부분 
// 거의 동일함 아래 로직은 


const fs = require('fs');

https.createServer({
    cert: fs.readFileSync(' 도메인 인증서 경로 '),
    key: fs.readFileSync(' 도메인 인증서 경로 '),
    ca:[
        fs.readFileSync((' 상위 인증서 경로 '),
        fs.readFileSync((' 상위 인증서 경로 '),
    ],// 이런식으로 createServer 부분 인자가 하나 더 들어간다. 인증서는 인증 기관에서 발급받아서 pem, crt, key 확장자 가진 파일 제공한다, 
}, (req, res)=>{
    
});

http2.createSecureServer({
    cert: fs.readFileSync(' 도메인 인증서 경로 '),
    key: fs.readFileSync(' 도메인 인증서 경로 '),
    ca:[
        fs.readFileSync((' 상위 인증서 경로 '),
        fs.readFileSync((' 상위 인증서 경로 '),
    ],// 이런식으로 createServer 부분 인자가 하나 더 들어간다. 인증서는 인증 기관에서 발급받아서 pem, crt, key 확장자 가진 파일 제공한다, 

}, (req, res)=>{

})
