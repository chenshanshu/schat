const port = 3000,
    app = require('express')(),
    server = require('http').Server(app),
    bodyParser = require('body-parser'),
    cors = require('./common/cors'),
    expressWs = require('express-ws')(app);

app.use(cors); //跨域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
//处理所有ajax请求
app.use('/api', require('./router/httpApi'));
app.use('/ws', require('./router/wsApi'));
app.listen(port, () => {
    console.log('开始监听3000端口');
})