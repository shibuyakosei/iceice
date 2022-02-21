import Vue, { createApp } from 'vue'
import App from './App.vue'
import router from"./router"

createApp(App).mount('#app')

new Vue({
    router: router,
    render: h=> h(App)
}).$mount("#app");