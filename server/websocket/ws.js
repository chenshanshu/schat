const websocket = require('ws').Server,
    wsApi = require('../api/wsApi'),
    url = require('url'),
    queryString = require('../common/queryString');
let socket = '';

module.exports = function (server) {
    const wss = new websocket({
        server
    });
    wss.on('connection', function connection(socket, request) {
        console.log('开始走ws')
        let params = url.parse(request.url).query,
            token = queryString(params).token;
        // 将socket储存进mongo
        wsApi.saveSocket({
            channel: socket,
            token: token
        });
        socket.on('message', function getMsg(dt) {
            // console.log(dt)
            let data = JSON.parse(dt),
                params = data.query,
                token = data.token,
                url = data.url;
            // 验证token;不合法直接return
            try {
                wsApi[url](params).then((data) => {
                    socket.send(data);
                }).catch((err) => {});
            } catch (err) {
                console.log('接口不存在')
            }
            // ws.clients.forEach(function (client) { client.send(data.msg) }); //广播
        });
    });
    wss.on('error', function error(msg) {
        console.log('发生错误', msg);
    })
};