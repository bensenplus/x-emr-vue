import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Command from './pages/Command.vue'
import DocData from './pages/BindData.vue'
import MutilDoc from './pages/MutilDoc.vue'
import AppendDoc from './pages/AppendDoc.vue'
import TabSample from './pages/TabSample.vue'
import Signature from './pages/Signature.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/cmd', component: Command },
    { path: '/data', component: DocData },
    { path: '/mutil', component: MutilDoc },
    { path: '/append', component: AppendDoc },
    { path: '/sign', component: Signature },
    { path: '/tab', component: TabSample }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router