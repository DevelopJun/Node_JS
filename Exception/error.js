// 노드에서는 예외 처리가 진짜 중요하다. 왜냐면 단일 쓰레드기 때문이다. 
// 만약에 예외 처리가 안된다면, 이런 예외들이 시스템을 중단시킨다. 
// 그래서 에러 로그가 기록 되더라도 작업은 계속 진행 될 수 있도록 에러 처리 방법 익혀둬야 한다. 

const fs = require('fs');

setInterval(()=>{
    fs.unlink('./adfadfa.js', (err)=>{
        if(err){
            console.error(err);
        }
    })
}, 1000);
// 실행 해보면 그냥 잘 실행된다. 프로세스는 멈추지 않고 그냥 에러만 발생 시킨다,

const fs = require('fs').promises;

setInterval(()=>{
    fs.unlink('./dfafd.js')
}, 1000);

// catch 없어도 알아서 잘 처리 된다. 