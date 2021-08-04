import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Pages/Home/Home.vue'
import Contato from '../Pages/Contato/Contato.vue'
import Sobre from '../Pages/Sobre/Sobre.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Home
        },
        {
            path: '/Sobre',
            name: 'Sobre',
            component: Sobre
        },
        {
            path: '/Contato',
            name: 'Contato',
            component: Contato
        }
    ]
});

export default router