const url = require("url");

const { URL } = url;

// url.parse(주소) : 주소를 분해한다. 
// 바로 밑의 WAHTWG 방식과 비교하면 username, password 대신에 auth 속성 존재함. 

// WHATWG url 구분 방법
const myURL = new URL("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor"); // 여기 url 다른것도 넣어보기! 
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));

// node url 구분 방법
console.log("-------------------");
const parsedUrl = url.parse("http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor");
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));

