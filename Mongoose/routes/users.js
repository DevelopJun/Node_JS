const express = require('express');
const User = require('../schemas/user');
const Comment = require('../schemas/comment');

const router = express.Router()
// GET /users 와 POST /users 주소로 요청이 들어올대 라우터이다. 
// 사용자를 조회하거나, 사용자 등록하는 요청을 처리한다. 
router.route('/')
    .get(async(req, res, next)=>{
        try{
            const users = await User.find({});
            res.json(users); // json 형식으로 users를 response해주고 있따. 
        }catch (err){
            console.error(err);
            next(err);
        }
    })
    .post(async(req, res, next)=>{
        try{    
            const user = await User.create({
                name: req.body.name,
                age: req.body.age,
                married: req.body.married,
            });
            console.log(user);
            res.status(201).json(user);
        }catch(err){
            console.error(err);
            next(err);
        }
    });

router.get('/:id/comments', async (req, res, next)=>{
    try{
        const comments = await Comment.find({ commenter: req.params.id })
        .populate('commenter'); // poluate 메서드로 관련 있는 컬렉션의 다큐먼트 불러올 수 있다.
        console.log(comments);
        res.json(comments);
    }catch(err){
        console.error(err);
        next(err);
    }
});


module.exports = router;

