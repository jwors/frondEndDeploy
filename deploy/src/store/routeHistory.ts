import { defineStore } from "pinia";



interface addRoute{
    path:string,
    routeName:string,
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
            let isIndexOf = this.routerHistoryList.some(item => item.path === route.path)
            if(!isIndexOf){
                this.routerHistoryList.push(route)
            }
        },
        removeRoute(path:string):void{
            this.routerHistoryList = this.routerHistoryList.filter(item =>item.path != path)
        }
    }
})