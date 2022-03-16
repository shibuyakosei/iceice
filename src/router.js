import { createRouter, createWebHistory } from 'vue-router';
import iceInfo from './components/ice_info.vue'
import showIce from './components/show_ice.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: iceInfo,
    },
    {
        path: '/show_ice/:id',
        name: 'show_ice',
        component: showIce,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router