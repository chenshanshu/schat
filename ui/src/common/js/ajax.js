let obj = { //定义ajax参数格式
    type: '',
    url: '',
    data: {}
}
let ajax = function (obj) {
    return new Promise((resolve, reject) => {
        obj["type"] = obj["type"].toUpperCase();
        let xhr = new XMLHttpRequest();
        if (obj.type === 'GET') {
            xhr.open('GET', obj.url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                    resolve(xhr.responseText);
                } else if (xhr.status != 200 && xhr.status != 304) {
                    reject(xhr.responseText);
                }
            };
            xhr.send();
        } else if (obj.type === 'POST') {
            xhr.open("POST", 'http://localhost:3000/api' + obj.url, true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                    resolve(xhr.responseText);
                } else if (xhr.status != 200 && xhr.status != 304) {
                    reject({
                        message: '请求失败',
                        statusText: xhr.statusText
                    });
                }
            };
            obj.data = JSON.stringify(obj.data);
            xhr.send(obj.data);
        }
    });
}
export default ajax