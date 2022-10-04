import { RouteRecordRaw } from "vue-router";
import LAYOUT from "@/layout/index.vue";
export const loginRoute:RouteRecordRaw = {
    path:'/login',
    name: 'Login',
    component: () => import('@/views/sys/login/login.vue'),
    meta: {
      title: 'need login',
    },
}

export const redirectRoute:RouteRecordRaw = {
    path:'/',
    name:'Root',
    redirect:'/login',
    meta:{
        title:'root'
    }
}

export const dashboard:RouteRecordRaw = {
    path:'/dashboard',
    name:'dashboard',
    redirect:'/dashboard/analysis',
    component:LAYOUT,
    meta:{
        title:'dashboard'
    },
    children:[
        {
            path:'analysis',
            name:'分析页',
            component:()=>import('@/views/dashboard/analysis/index.vue')
        },
        {
            path:'workbench',
            name:'工作台',
            component:()=>import('@/views/dashboard/workbench/index.vue')
        },
    ]
}

export const basicRoutes = [
    loginRoute,
    redirectRoute,
    dashboard
]