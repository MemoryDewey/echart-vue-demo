import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
    {
        path: '/',
        name: 'Home',
        redirect: '/landlord'
    },
    {
        path: '/landlord',
        name: 'Landlord',
        meta: {
          title: '房东'
        },
        component: () => import('../views/Landlord'),
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            title: '租客'
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
