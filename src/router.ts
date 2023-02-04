/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router';
import auth from './services/auth';
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/ViewHome.vue'),
        },
        {
            path: '/login',
            component: () => import('@/views/ViewLogin.vue'),
        },
        {
            path: '/register',
            component: () => import('@/views/ViewRegister.vue'),
        },
    ],
})
/* eslint-disable */
