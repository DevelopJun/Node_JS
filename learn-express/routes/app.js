const express = require('express')
const path = require('path')
const app = express();
app.set('port', process.env.PORT || 3000);

const indexRouter = require('./index.js'); // index.js 는 생략할 수 있음. 
const userRouter = require('./user.js');

app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next)=>{
    res.status(404).send('Not Found');
})


app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});



