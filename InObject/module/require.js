require('./var');

console.log(require.cache);
console.log("******");
console.log(require.main === module);
console.log(require.main.filename);