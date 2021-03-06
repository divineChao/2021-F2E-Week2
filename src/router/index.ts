import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/' },
    { path: '/2021-F2E-Week2/', name: 'home', component: () => import('@/pages/Home.vue') },
    { path: '/2021-F2E-Week2/cycling-shape', name: 'cyclingShape', component: () => import('@/pages/CyclingShape.vue') },
    { path: '/2021-F2E-Week2/error/', name: 'error', component: () => import('@/pages/Error.vue') },
    { path: '/2021-F2E-Week2/action/', name: 'action', component: () => import('@/pages/action/index.vue') },
  ],
})

export default router
