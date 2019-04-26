class mysql {
    constructor() {
        this.mysqlLib = require('mysql');
        this.config = {
            host: '127.0.0.1',
            port: '3306',
            database: 'schat',
            user: 'root',
            password: '201619'
        };
        this.pool = this.mysqlLib.createPool(this.config); //创建连接池，提升速度；
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