import { createApp } from 'vue'
import './design/index.less'
import App from './App.vue'
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import 'ant-design-vue/dist/antd.css'
import { setupStore } from './store/store'
import {router} from '@/router'
import {createPermissionGuard} from '@/router/guard'

 function generateApp (){
    const app = createApp(App)
    setupStore(app)
    app.use(router)
    createPermissionGuard(router)
    app.mount('#app');
}
generateApp()