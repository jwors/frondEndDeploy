import { defineStore } from "pinia";

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