import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Pages/Home/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Home
        }
    ]
});

export default router