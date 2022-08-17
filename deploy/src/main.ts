import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import 'ant-design-vue/dist/antd.css'
import {createPinia} from 'pinia'
import {router} from '@/router'
import {createPermissionGuard} from '@/router/guard'

const store = createPinia()
function generateApp (){
    const app = createApp(App)
    app.use(router)
    app.use(store)
    createPermissionGuard(router)
    app.mount('#app');
}
generateApp()