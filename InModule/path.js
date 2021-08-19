const path = require("path");

const string = __filename;

console.log("path.sep", path.sep);
console.log("path.delimiter:",path.delimiter);
console.log("-----------------------");
console.log('path.dirname():', path.dirname(string)); // 파일 위치 경로 
console.log('path.extname():', path.extname(string)); // 파일 확장자 
console.log('path.basename():', path.basename(string));
console.log('path.basename-extname:', path.basename(string, path.extname(string)));

console.log('-----------------------');
console.log('path.parse():', path.parse(string));


// 상대 경로와 절대 경로 
// 절대 경로는 루트 폴더나 노드 프로세스가 실행되는 위치가 기준이고, 상대 경로는 현재 파일이 기준이 된다. 현재 파일과 같은 경로면 점 하나(.)를, 현재 파일보다
// 한 단계 상위 경로면 두 개 (..)를 사용해 표현한다. 

console.log(path.join('/a', '/b', 'c'));
console.log(path.resolve('/a', '/b', 'c'));