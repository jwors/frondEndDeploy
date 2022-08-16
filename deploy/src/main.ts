import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import 'ant-design-vue/dist/antd.css'
import {router} from '@/router'
import {createPermissionGuard} from '@/router/guard'


function generateApp (){
    const app = createApp(App)
    app.use(router)
    createPermissionGuard(router)
    app.mount('#app');
}
generateApp()