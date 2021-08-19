const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log("searchParams:", myURL.searchParams);
console.log(myURL.searchParams.getAll('category'));
console.log(myURL.searchParams.has('page'));

console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3')
myURL.searchParams.append('filter', 'es5')
console.log("searchParams:", myURL.searchParams);
