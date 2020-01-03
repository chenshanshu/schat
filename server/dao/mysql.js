class mysql {
    constructor() {
        this.mysqlLib = require('mysql');
        this.config = {
            host: '192.168.108.189',
            port: '3306',
            database: 'schat',
            user: 'root',
            password: '201619'
        };
        this.pool = this.mysqlLib.createPool(this.config); 
    }
    getClient() {
        return new Promise((resolve, reject) => {
            this.pool.getConnection((err, client) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(client);
                };
            })
        })
    }
    query(sql, params) {
        return new Promise((resolve, reject) => {
            this.getClient().then((client) => {
                client.query(sql, params, (err, result) => {
                    if (err) return console.log('数据库查询失败', err);
                    resolve(result);
                    client.release();
                })
            }).catch((err) => {
                reject('err', err)
                console.log('数据库连接失败', err);
            })
        })
    }
}
module.exports = mysql;