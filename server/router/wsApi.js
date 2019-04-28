const express = require('express'),
    router = express.Router();

router.ws('/', (ws, req) => {
    // ws.send({});
    ws.on('message', msg => {
        ws.send(JSON.stringify({
            code: 0,
            name: "danel",
            age: 27
        }));
    });
    ws.on('close', msg => {
        // 此处将client进行删除
    });
    ws.on('err', msg => {});
})
module.exports = router;