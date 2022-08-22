import type {Router,RouteRecordRaw} from 'vue-router'
import nProgress from 'nprogress';
import {getCookie} from '@/utils/index'

export function createPermissionGuard(router:Router){
    router.beforeEach(async (to,from,next) => {
        nProgress.start()
        const permission = getCookie('login')
        if(permission) {
            next()
            nProgress.done()
        }else{
            
            if(to.path === '/login'){
                next()
            }else{
                next({
                    path:'/login'
                }) 
            }
            nProgress.done()
        }
    })
}