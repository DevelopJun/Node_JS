const express = require('express');
const User = require('../models/user');
const Comment = require('../models/comment');

const router = express.Router();

router.route('/')
    .get(async (req, res, next)=>{ // 이게 /user get으로 들어왔을때 
        try{
            const users = await User.findAll();
            res.json(users);
        }catch(err){
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next)=>{
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
        console.log('여기 댓글 에러');
        const comments = await Comment.findAll({
            include: {
                model: User,
                where: { id: req.params.id },
            },
        });
        console.log(comments);
        res.json(comments);
    }catch(err){
        console.log('여기 댓글 에러');
        console.error(err);
        next(err);
    }
});

module.exports = router // module.exports 는 require() 함수를 사용했을 때 반환 받는 함수 
