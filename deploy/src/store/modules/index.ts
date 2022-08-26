import { defineStore } from "pinia";
import {store} from '../store'

interface adminStore {
    expansion:boolean
}

export const adminManagerPinia = defineStore('admin',{
    state: ():adminStore => {
        return {
            expansion:false
        }
    },
    actions:{
        changeExpansion():void{
            this.expansion = !this.expansion
        }
    }
})

export function useManangeStore(){
    return adminManagerPinia(store);
}