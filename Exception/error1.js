// 예측이 불가능 한 에러 잡는법.

process.on('uncaughtException', (err)=>{
    console.error('예기치 못한 에러', err);
})

setInterval(()=>{
    throw new Error('서버를 고장 내준다')
}, 1000);

setTimeout(()=>{
    console.log('실행됩니다');
}, 2000);