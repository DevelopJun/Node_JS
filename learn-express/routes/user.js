const express = require('express');

const router = express.Router();

// GET / user 라우터 
router.get('/', function(req, res, next){
    next('route');
}, function(req, res, next){
    console.log('실행되지 않습니다.');
    next()
}, function(req, res, next){
    console.log('실행되지 않습니다.');
    next()
});

router.get('/', (req, res)=>{
    console.log('실행됩니다');
    res.send('Hello, User');
});

router.get('/:id', (req, res)=>{
    console.log("id 실행되는 부분 ");
    console.log(req.params); // id 부분 추출하고
    console.log(req.query); // 쿼리 부분 추출해준다. 주소에  쿼리스트링 쓸 때도 있는데, user/123?limit=5&skip=10 이런식으로 쿼리스트링 키-값 정보는 req.query 객체 안에 들어가 있다.
})

router.get('/like', (req, res)=>{
    console.log("전혀 실행되지 않습니다.");
})

module.exports = router;
