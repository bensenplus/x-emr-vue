import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/user.css'

import App from './App.vue'
import router from './router'

import Editor from '@/components/Editor.vue'
import Source from '@/components/Source.vue'

const app = createApp(App)
//注册全局组件Editor&Source
app.component('Editor', Editor)
app.component('Source', Source)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
