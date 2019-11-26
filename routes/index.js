var express = require('express');
var router = express.Router();

/* index.ejs home page. */
router.get('/', function (req, res, next) {
    // .ejs에 <%= 변수명 %>적용하는 코드
    res.render('index', {title: 'Express'});
});

// 특정 path로 값 보내기
router.get('/login', (req, res)=>{
    var info = req.query.info; // ejs파일의 name 속성을 가져온다. 
    res.send(`info: ${info}`);
})
module.exports = router;
