import Login from '@/views/login/login'
import IndexPage from '@/views/index/index'
import Chat from '@/views/chat/index'
export default [
    { path: '/login/:type', name: 'Login', component: Login, meta: 1, props: true },
    { path: '/', name: 'Index', component: IndexPage, meta: 2, props: true },
    { path: '/chat', name: 'Chat', component: Chat, meta: 3, props: true },
    { path: '*', redirect: '/', name: 'undefined' },
]