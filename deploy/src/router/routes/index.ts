import { RouteRecordRaw } from "vue-router";

export const loginRoute:RouteRecordRaw = {
    path:'/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/login.vue'),
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

export const basicRoutes = [
    loginRoute,
    redirectRoute
]