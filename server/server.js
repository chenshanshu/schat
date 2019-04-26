const path = require('path'),
    app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    cors = require('./common/cors'),
    ws = require('./websocket/ws')(server);
app.use(cors); //跨域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//处理所有ajax请求
app.use('/api', require('./api/httpApi'));
app.use('*',function(){
    console.log('aaa');
})
app.listen(3000, () => {
    console.log('开始监听3000端口')
})