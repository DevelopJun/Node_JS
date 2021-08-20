// child_process 
// 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈이다.
// 이 모듈을 통해 다른 언어의 코드(예를 들면, 파이썬 ) 실행결과 받을 숭 ㅣㅆ음. 
const spawn = require("child_process").spawn;
const process = spawn('python', ['InModule/test.py']);
// const exec = require("child_process").exec;
// const process = exec('dir');


process.stdout.on('data', function(data){
    console.log(data.toString());
}); // 실행결과

process.stderr.on('data', function(data){
    console.log(data.toString());
}); // 실행에러 

