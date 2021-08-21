const buffer = Buffer.from('저를 버퍼로 바꿔보세요 ');
console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from("버퍼 "), Buffer.from("버퍼는 "), Buffer.from("버퍼 띄어쓰기") ]
const buffer2 = Buffer.concat(array) // concat은 배열 안에 버퍼 하나로 모으기 
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);
