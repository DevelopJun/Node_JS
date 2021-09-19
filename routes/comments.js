const express = require('express');
const Comment = require('../schemas/comment');

const router = express.Router();

// 댓글에 관련된 CRUD 작업을 하는 라우터이다. 
// POST / COMMENTS, / PATCH / comments/:jd, DELETE/comments/:id 를 등록함. 

router.post('/', async(req, res, next)=>{
    try{
        const comment = await Comment.create({
            commenter: req.body.id,
            comment: req.body.comment,
        }); // 댓글을 comment에 저장하고,
        console.log(comment);
        const result = await Comment.populate(comment, { path: 'commenter'}); // populate 메서드로 프로미스의 결과로 반호니된 comment 객체에 다른 컬렉션 다큐먼트를 불러온다. 
        // path 옵션으로 어떤 필드로 합칠지 설정, 합쳐진 겨로가를 클라이언트로응답, 
        res.status(201).json(result);
    }catch(err){
        console.error(err);
        next(err);
    }
});

router.route('/:id')
    .patch(async(req, res, next)=>{
        try{
            const result = await Comment.update({
                _id: req.params.id,
            },{
                comment: req.body.comment,
            });
            res.json(result)
        }catch(err){
            console.error(err);
            next(err);
        }
    })
    .delete(async (req, res, next)=>{
        try{
            const result = await Comment.remove({ _id: req.params.id });
            res.json(result);
        }catch(err){
            console.error(err);
            next(err);
        }
    });

module.exports = router;
