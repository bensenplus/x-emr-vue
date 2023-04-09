import { createApp } from 'vue'
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Layui)
app.use(router)
app.mount('#app')
