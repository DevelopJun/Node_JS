router.get('/abc', (req, res)=>{
    res.send('GET / abc ');
})
router.post('/abc', (req, res)=>{
    res.send('Post / abc ');
})

// 이런 관련 있는 코드  묶을 수 있따. 

router.router('/abc')
    .get((req, res)=>{
        res.send('GET / abc');
    })
    .post((req, res)=>{
        res.send('POST /abc');
    });


