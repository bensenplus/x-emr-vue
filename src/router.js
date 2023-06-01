import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Command from './pages/Command.vue'
import DocData from './pages/BindData.vue'
import MutilDoc from './pages/MutilDoc.vue'
import EditorSource from './pages/EditorSource.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/cmd', component: Command },
    { path: '/data', component: DocData },
    { path: '/mutil', component: MutilDoc },
    { path: '/editor', component: EditorSource }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

export default router