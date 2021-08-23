// cluster 모듈은 기본적으로 싱글 프로세스로 동작하는 노드가 CPU 코어를 모두 사용할 수 있게 해주는 모듈이다. 
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// 쉽게 말하면 cluster.fork()를 사용해서 워커 프로세스를 만들고,  종료 되었을때 code는 exit의 인수, signal은 존재하는 경우 프로세스 종료한 신호의 이름 넣어서 
// 하나씩 종료 시킨다. 즉, 예기치 못한 에러로 인해 서버가 종료되는 현상을 빙지할 수 있는 것임.

if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디 : ${process.pid}` );
    // cpu만큼 워커를 생산 
    for(let i = 0; i < numCPUs; i += 1){
        cluster.fork();
    }
    // 워커가 종료 되었을 때 
    cluster.on('exit', (worker, code, signal)=>{
        console.log(`${worker.process.pid} 번 워커가 종료 되었습니다.`);
        console.log('code', code, 'signal', signal);
});
}else{
    // 워크들이 포트에서 대기, 
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
        res.write('<h1>Hello Node</h1>');
        res.end('<p>Hello Cluster! </p>');
        setTimeout(()=>{ // 워커가 존재하는 지 확인하기 위해 1초마다 강제 종료 
            process.exit(1);
        }, 1000);
    }). listen(8086);

    console.log(`${process.pid}번 워커 실행`);
}