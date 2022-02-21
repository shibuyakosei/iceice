import Vue from 'vue';
import Router from 'vue-router';
import ice_info from './components/ice_info.vue'
import show_ice from './components/show_ice.vue'

Vue.use(Router);

export default new Router({
    routes: [{path: '/', component:ice_info}, {path: '/show_ice', component:show_ice}]
});