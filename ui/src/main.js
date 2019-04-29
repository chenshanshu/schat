import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import VueOnsen from 'vue-onsenui'
import ajax from './common/js/ajax'
import websocket from './common/js/websocket'
Vue.use(VueOnsen)
Vue.prototype.$ajax = ajax; //添加到vue原型链上
Vue.prototype.$websocket = websocket;

const app = new Vue({
    el:'#app',
    router,
    template: '<App/>',
    components: { App }
})