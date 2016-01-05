var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Woody\'s Blog'});
});

/*注册*/
router.get('/register', function (req, res, next) {
    res.render('register', {title: '注册'});
})

/*登陆*/
router.get('/login', function (req, res, next) {
    res.render('login', {title: '登陆'});
})


module.exports = router;
