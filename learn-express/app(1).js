const express = require('express');
const path = require('path');

const app = express();
//app.set('port' , 포트) 서버가 실행되고 포트를 설정한다 
//app.set(키, 값) 사용해서 데이터를 저장할 수 있다,. 
app.set('port', process.env.PORT || 3000);

//app.get(주소, 라우터)는 주소에 대한 GET 요청이 올 때 어떤 동작할지 
// 익스프레스에서는 res.write, res.end 안쓰고, res.send 쓴다. 

// 미들웨어는 app.use 와 함께 사용된다. app.use(미들웨어)
app.use((req, res, next)=>{
    console.log('모든 요청에 다 실행됩니다.'); // 라우터 지정 안하면 
    next(); // 다음 미들웨어로 넘거나느 함수 next()
});

app.get('/', (req, res, next)=>{
    console.log('/GET 요청에서만 실행됩니다.');
    next();
    // res.sendFile(path.join(__dirname, '/index.html'));
}, (req, res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
});

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});