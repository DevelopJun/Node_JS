router.get('/', function(req, res, next){
    res.render('index', {title: 'Express'});
});
// 이런식으로 하면 html 랜더링 하면서 index.pug를 title 부분이 express로 치환된다. 

router.get('/', function(req, res, next){
    res.locals.title = 'Express';
    res.render('index');    
});
// 이런식으로 위 처럼 객체를 넣는 대신에, res.locals 객체를 사용해서 변수를 넣을 수도 있음.

