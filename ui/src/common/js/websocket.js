// socket.readyState
// 0-正在连接
// 1-连接成功
// 2-正在关闭
// 3-关闭成功
import {
    getLocalStorage
} from './common'
import Vue from 'vue';
let token = getLocalStorage("token");
let websocket = function () {
    return new Promise((resolve, reject) => {
        const socket = new WebSocket(`ws://127.0.0.1:3000/ws?token=${token}`);
        socket.onopen = function (event) {
            if (socket.readyState === 1) {
                Vue.prototype.$ws = socket;
                resolve();
            }
        };
        socket.onclose = function (event) {
            console.log(event)
            console.log("websocket断开连接");
        };
        socket.onerror = function (err) {
            console.log("websocket连接出错", err);
            reject(err);
        };

    })
}
export default websocket