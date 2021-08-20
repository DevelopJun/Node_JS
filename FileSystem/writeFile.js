const fs = require('fs').promises

fs.writeFile('FileSystem/writeme.txt', '글이 입력됩니다.')
    .then(()=>{
        return fs.readFile('FileSystem/writeme.txt');
    })
    .then((data)=>{
        console.log(data.toString());
    })
    .catch((err)=>{
        console.log(err);
    })