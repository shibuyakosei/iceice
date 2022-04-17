import { createRouter, createWebHistory } from 'vue-router';
import iceInfo from './components/ice_info.vue'
import Detail from './components/pages/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: iceInfo,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router