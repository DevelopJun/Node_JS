
// 운영체제 별로 다른 서비스를 제공할때 os 모듈이 유용하게 작용하겠지 
// 일반적인 웹 서비스를 할때는 사용 빈도가 높지는 않다. 
const os = require('os');

console.log('운영체제 정보 -----------------------------');
// console.log(os);
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname:', os.hostname());
console.log('os.release:', os.release());

console.log("경로 ---------------------------------------");
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보 --------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length);

console.log('메모리 정보--------------------------------');
console.log('os.freemen():', os.freemem()); // 사용가능한 메모리 Ram
console.log('os.totalmen():', os.totalmem()); // 전체 메모리 용량 
