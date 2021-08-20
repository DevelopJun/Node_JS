// 양방향 암호화 => 암호화 하고 복호화 하고 

const crypto = require('crypto');

// console.log(crypto.getCiphers()); // 이걸 보게 되면 암호화 알고리즘 종류 알 수 있음. 

const algorithm = 'aes-256-cbc'; // 이 알고리즘 쓰면 
const key = 'abcdefghiklmnopqrstuvwxyz1234567'; // 32바이트 여야하고
const iv = '1234567890123456'; // 16바이트
console.log(key.length);
console.log(iv.length);

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('기죽지 마라, 당당하게', 'utf-8', 'base64');
result += cipher.final('base64') // 출력 결과물의 인코딩 넣으면 암호화 완료 
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf-8');
console.log("복호화:", result2 );