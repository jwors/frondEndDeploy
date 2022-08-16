import type {Router,RouteRecordRaw} from 'vue-router'
import nProgress from 'nprogress';
import {getCookie} from '@/utils/index'

export function createPermissionGuard(router:Router){
    router.beforeEach(async (to,from,next) => {
        nProgress.start()
        const permission = getCookie('power')
        if(!permission) {
            next('/login')
            nProgress.done()
            return
        }else{
            next()
            nProgress.done()
        }
    })
}