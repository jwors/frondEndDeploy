import type {Router,RouteRecordRaw} from 'vue-router'
import { routeHistoryPinia } from '@/store/routeHistory';
import nProgress from 'nprogress';
import {getCookie} from '@/utils/index'

const routeHistoryPiniaStore = routeHistoryPinia()

export function createPermissionGuard(router:Router){
    router.beforeEach(async (to,from,next) => {
        nProgress.start()
        const permission = getCookie('login')
        if(permission) {
            next()
            console.log(to);
            routeHistoryPiniaStore.addRouteHistory({
                path:to.path,
                exhibitionRoute:true,
                routeName:to.name,
            })
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