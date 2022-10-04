import { defineStore } from "pinia";
import {store} from '../store'
interface addRoute{
    path:string,
    routeName:any,
    exhibitionRoute:boolean
}
interface routeHistoryStore {
    routerHistoryList:Array<addRoute>
}
export const routeHistoryPinia = defineStore('routeHistory',{
    state: ():routeHistoryStore => {
        return {
            routerHistoryList:[]
        }
    },
    actions:{
        addRouteHistory(route:addRoute):void{
            // add push route to history stack
            let isIndexOf:boolean = false;
            this.routerHistoryList.forEach(item => {
                item.exhibitionRoute = false
                if( item.path === route.path) {
                    item.exhibitionRoute = true
                    isIndexOf = true
                }
            })
            if(!isIndexOf){
                this.routerHistoryList.push(route)
            }
        },
        removeRoute(path:string):void{
            this.routerHistoryList = this.routerHistoryList.filter(item =>item.path != path)
        }
    },
    getters:{
        getNowExhibition():addRoute{
            return this.routerHistoryList.filter(item => item.exhibitionRoute== true)[0]
        }
    }
})

export function routeHistoryStore(){
    return routeHistoryPinia(store);
}