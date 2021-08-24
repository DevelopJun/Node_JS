const express = require('express');
const path = require('path');
const app = express();

const router = express.Router();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')); // views 템플릿 파일들이 위치한 폴더를 지정한다. res.render 메서드가 이 폴더 기준으로 
app.set('view engine', 'pug') // view engine은 어떤 엔진을 사용할건지 선택하는거임. 

app.get('/', function(req, res, next){
    // res.sendFile(__dirname + 'views/index.pug');
    // res.render('index');

    // res.render('index', {title: 'Express'});
    res.render('main');
    // res.render('index2', {title: 'pogba'});
});

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});

