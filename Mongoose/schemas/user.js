// 시퀄라이즈에서 테이블 만들었던 것 처럼 몽구스 스키마를 만들어보자.
// schemas 폴더 user이렇게 만들어서, user.js 와 comment.js 만들어보는 것.

const mongoose = require('mongoose');

const {Schema} = mongoose;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique:  true,
    },
    age: {
        type: Number,
        required: true
    },
    married: {
        type: Boolean,
        required: true,
    },
    comment: String,
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema); // 몽구스의 model메서드로, 스키마와 몽고 디비 컬렉션을 연결하는 모델을 만든다. 


// 몽구스는 알아서 _id를 기본 키로 생성하므로 _id 필드는 적어줄 필요가 없다.
// 나머지 필드의 스펙만 입력한다. 
