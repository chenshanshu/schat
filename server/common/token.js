const jwt = require('jsonwebtoken');

class Jwt {
    constructor(data) {
        this.data = data;
    }
    createToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let secret = 'secret';
        let token = jwt.sign({
            data,
            exp: created + 60 * 60,
        }, secret, { algorithm: 'HS256' });
        return token;
    }
    verifyToken() {
        let token = this.data;
        let secret = 'secret';
        let res;
        try {
            let result = jwt.verify(token, secret, { algorithms: ['HS256'] }) || {};
            console.log(result);
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            if (current <= exp) {
                res = result.data || {};
            }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}
module.exports = Jwt;