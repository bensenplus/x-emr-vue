import * as VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Command from './components/Command.vue'
import DocData from './components/DocData.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/cmd', component: Command },
    { path: '/data', component: DocData },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router