import * as VueRouter from 'vue-router'
import Home from '@/pages/Home.vue'

function generateRoutes() {
    const pages = import.meta.globEager('@/pages/*.vue')
    let routers = [
        //默认路由
        { path: '/', component: Home }
    ]

    //自动发现路由
    Object.keys(pages).forEach(path => {
        routers.push({
            path: path.replace('/src/pages', '').replace('.vue', ''),
            component: pages[path].default
        })
    })
    return routers
}

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: generateRoutes()
})

export default router