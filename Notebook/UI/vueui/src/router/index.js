import {createRouter, createWebHistory} from "vue-router";

import NbHome from "../views/NbHome.vue";
import NbError from "../views/NbError.vue";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: NbHome
    },
    {
        path: '/:CatchAll(.*)',
        name: 'Error',
        component: NbError
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;