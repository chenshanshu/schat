const express = require('express'),
    router = express.Router();

router.ws('/', (ws, req) => {
    // ws.send({});
    console.log('链接成功')
    ws.on('message', msg => {
        ws.send(JSON.stringify({
            code: 0,
            name: "danel",
            age: 27
        }));
    });
    ws.on('close', msg => {
        console.log('触发关闭')
    });
    ws.on('error', err => {});
})
module.exports = router;