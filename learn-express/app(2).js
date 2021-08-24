const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config() // .env 들고 와서 process.env로 만든다. 따라서 밑에 porcess.env.COOKIE_SECRET // dev 기준으로 http 메서드, 주소, http 상태코드, 응답속도, 응답 바이트를 의미한다.


const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev')); // 여기에 combined, common, short, tiny 등을 넣을 수 있다.
app.use('/', express.static(path.join(__dirname, 'public'))); // 정적 파일 경로임, 실제 url 에는 public 표시 안된다.

// 요청의 보문에 있는 데이터 해석해서, req.body로 객체 만들어주는 미들웨어
// 요청 데이터 종류=> JSON은 JOSN 형식, URL-encoded는 주소형식으로 데이터, 폼 전송은 URL-encoded 방식을 주로 사용함. 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); // extended: 이 부문이 false면 노드이 querystring 모듈을 사용하여 쿼리 스트링 해석하고, true면 qs 모듈을 사용하여 쿼리 스트링을 해석한다. 


app.use(cookieParser(process.env.COOKIE_SECRET)); // 해석된 쿠키들은 req.cookies 객체에 들어간다. cookieParser(비밀키) 이 비밀키를 통해 해당 쿠키가 내 서버가 만든 쿠키임을 검증가능하다. 서명이 붙으면 쿠키가 name=pogba.sign 형태가 되며,
// 서명된 쿠키는 req.cookies 대신 req.signedCookies 객체에 들어 있다. 


// 세션 관리용 미들 웨어 이다. 로그인 등의 이유로 세션을 구현하거나 특정 사용자를 위한 데이터를 임시적으로 저장 가능, 
// 세션은 사용자별로 req.session 객체 안에 유지된다. 
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookie'
}));


app.use((req, res, next)=>{
    console.log('모든 요청에 다 실행됩니다.'); 
    next();
});

app.get('/', (req, res, next)=>{

    // 이러면 쿠키가 만들어지고, 
    res.cookie('name', 'pogba',{
        expires: new Date(Date.now + 900000),
        httpOnly: true,
        secure: true,
    });
    // 이러면 쿠키가 삭제되는거지, 
    res.clearCookie('name', 'pogba', {httpOnly: true, secure:true});

    console.log('/GET 요청에서만 실행됩니다.');
    next();
}, 
(req, res)=>{
    res.sendFile(path.join(__dirname, '/index.html'));
    // throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
}
);

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});
