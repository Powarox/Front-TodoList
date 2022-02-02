import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
        }
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Login',
        }
    },
]

const router = createRouter({
    history : createWebHashHistory(process.env.BASE_URL),
    routes
});

router.afterEach((to) => {
    document.title = to.meta.title;
})

export default router;
