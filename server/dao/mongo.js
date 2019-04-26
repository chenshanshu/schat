class mongo {
    constructor() {
        this.MongoClient = require('mongodb').MongoClient;
        this.url = "mongodb://localhost:27017";
    }
    connect() {
        return new Promise((resolve, reject) => {
            this.MongoClient.connect(this.url, { useNewUrlParser: true }, function (err, client) {
                if (err) {
                    console.log('数据库连接失败', err);
                    reject(err);
                } else {
                    resolve(client);
                };
            })
        })
    }
    select(collection, query) {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                let dbo = client.db("schat");
                dbo.collection(collection).find(query).toArray((err, result) => {
                    if (err) {
                        reject({ code: -1, data: err, msg: '查询失败' });
                    } else {
                        resolve({ code: 0, data: result, msg: '查询成功' });
                    }
                    client.close();
                })
            }).catch((err) => { reject({ code: -1, data: result, msg: '连接出错' }); })
        })

    }
    insert(collection, query) {
        return new Promise((resolve, reject) => {
            this.connect().then((client) => {
                let dbo = client.db("schat");
                dbo.collection(collection).insertOne(query, (err, result) => {
                    if (err) {
                        reject({ code: -1, data: err, msg: '添加失败' });
                    } else {
                        resolve({ code: 0, data: result, msg: '添加成功' });
                    }
                    client.close();
                })
            }).catch((err) => { reject({ code: -1, data: result, msg: '连接出错' }); })
        })

    }
    remove(callback) {

    }
}
module.exports = mongo;