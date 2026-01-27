import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AgreementView from './views/AgreementView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/agreement', name: 'Agreement', component: AgreementView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router