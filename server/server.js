const app = require('express')(),
    bodyParser = require('body-parser'),
    cors = require('./common/cors'),
    expressWs = require('express-ws')(app);

app.use(cors); //跨域
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/api', require('./router/httpApi'));
app.use('/ws', require('./router/wsApi'));
app.listen(3000, () => {
    console.log('service is runing at port 3000...');
})