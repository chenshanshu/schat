import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)
const router = new VueRouter({
    hashbang: false,
    history: true,
    linkActiveClass: 'active',
    routes: routes
})
router.beforeEach((to, from, next) => {
    if (!localStorage.getItem("token") && to.name !== "Login") {
        return next({path:"/login/login"});
    }
    if (localStorage.getItem("token") && to.name === "Login") {
        return next({path:"/"});
    }
    next();
})
export default router