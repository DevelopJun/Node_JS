const mongoose = require('mongoose');

const { Schema } = mongoose;
const { Types: { ObjectId }} = Schema
const commentSchema = new Schema({
    commenter: {
        type: ObjectId,
        required: true,
        ref: 'User', // commneter 필드에 User 스킴아ㅢ 사용자 objectId가 들어간다는 뜻이다. 
    },
    comment: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Comment', commentSchema); // 여기 마지막 인수에 컬렉션이름 쓰면 Comment 가 아니라 다른 이름으로 사용가능.
