const express = require('express'),
    router = express.Router(),
    mongo = require('../dao/mongo'),
    JwtUtil = require('../common/token'),
    crypto = require('../common/crypto');
const MONGO = new mongo();
router.use('/', (req, res, next) => {
    next();
})
router.post('/register', async (req, res, next) => {
    let query = { "name": req.body.username, "password": crypto.md5(req.body.password + crypto.MD5_SUFFIX) };
    try {
        let data1 = await MONGO.select('user', { "name": req.body.username });
        if (data1.code === 0 && data1.data.length > 0) {
            return res.json({ code: -1, "title": "该用户名已注册" })
        }
        let data2 = await MONGO.insert('user', query);
        if (data2.code === 0) {
            return res.json({ code: 0, "title": "注册成功", "data": data2.data })
        }
    } catch (err) {
        res.json({ code: -1, "title": "注册失败" })
    }
})
router.post('/login', async (req, res, next) => {
    let query = { "name": req.body.username, "password": crypto.md5(req.body.password + crypto.MD5_SUFFIX) };
    try {
        let data1 = await MONGO.select('user', { "name": req.body.username });
        if (data1.code !== 0 || data1.data.length <= 0) {
            return res.json({ code: -1, "title": "该用户未注册" })
        }
        let data2 = await MONGO.select('user', query);
        if (data2.code === 0 && data2.data.length > 0) {
            let token = new JwtUtil(data2.data[0]).createToken();
            return res.json({ code: 0, "title": "登录成功", "token": token })
        } else {
            return res.json({ code: -1, "title": "密码错误" })
        }
    } catch (err) {
        res.json({ code: -1, "title": "登录失败" })
    }
})
router.post('/resetPasswd', (req, res, next) => {
    res.json({ "title": "重置密码" })
})
module.exports = router;
