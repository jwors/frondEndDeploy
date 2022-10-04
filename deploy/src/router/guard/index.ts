import type {Router} from 'vue-router'
import { routeHistoryStore } from '@/store/modules/routeHistory';
import nProgress from 'nprogress';
import {getCookie} from '@/utils/index'




export function createPermissionGuard(router:Router){
    nProgress.start()
    const  routeHistoryPiniaStore = routeHistoryStore()
    router.beforeEach(async (to,from,next) => {
        const permission = getCookie('login')
        if(permission) {
            next()
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