const fs = require('fs');
const express = require('express');
const path = require('path');

// multer 패키지 
const multer = require('multer');


const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){ // 어디에
            done(null, 'uploads/'); //req 매개변수에는 요청에 대한 정보가, file 객체에는 업로드한 파일에 대한 정보가 done 매개변수는 함수다, // 현재 설정으로 uploads라는 폴더에 팔일으로 업로드 하고 있음, 
        },
        filename(req, file, done){ // 어떤 이름으로
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext); // [파일명 + 현재시간.확장자]
        },
    }),
    limits: {fileSize: 5 * 1024 * 1024}, // 파일 사이즈 5MB로 제한 두고 있음,
});

const app = express();


app.set('port', process.env.PORT || 8080);

app.get('/', (req, res)=>{
    try{
        fs.readdirSync('uploads');
    }catch(error){
        console.error("uploads 폴더가 없어서 폴더를 생성합니다.");
        fs.mkdirSync('uploads');
    }
    console.log('html 로딩');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/upload', upload.array('many'), 
    // 만약에 위에 한 파일만 올릴려면 upload.single('image')
    // 파일을 여러개 업로드 하지만, input 태그나 폼 데이터의 키가 다른 경우에는 fileds 미들웨어를 사용한다. 
    // upload.fields([{name: 'image1'}, {name:'image2'}]),
    // 업로드 결과도 req.files.imgae1, req.files.imag2에 각각 들어 있다.
    (req, res)=>{ // upload single 미들웨어를 앞에 넣어두면 multer 설정에 따라서 req.file 객체 안에 들어있음. req.body는 팡리이 아닌 데이터 title이 들어 있음.
    
    console.log(req.file, req.body);
    res.send('ok');
});

app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});
