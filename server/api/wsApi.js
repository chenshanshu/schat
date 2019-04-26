let mongo = require('../dao/mongo'),
    JwtUtil = require('../common/token');
let wsApi = {
    saveSocket(params) {
        let originText = new JwtUtil(params.token).verifyToken();
        console.log(originText);
    },
    friendsList(params) {
        return new Promise((resolve, reject) => {
            new mongo().select("user", params, function (data) {
                if (data.code === 0) {
                    let dt = data.data;
                    dt = dt.map(item => {
                        delete item.password;
                        return item;
                    })
                    let response = JSON.stringify({ code: 0, data: dt });
                    resolve(response)
                } else {
                    reject('{code:-1,data:接口请求失败}')
                }
            })
        })
    },
    msgList(params) {
        return new Promise((resolve, reject) => {

        })
    }
}
module.exports = wsApi;