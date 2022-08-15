// import type 仅仅是导入类型  import type / export type

import { createRouter, createWebHashHistory } from 'vue-router';
import { basicRoutes } from './routes';

export const router = createRouter({
    history:createWebHashHistory(),
    routes:basicRoutes,
    scrollBehavior: () => ({ left: 0, top: 0 }),
})