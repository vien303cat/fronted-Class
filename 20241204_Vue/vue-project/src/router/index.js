import { createRouter ,createWebHashHistory } from 'vue-router'
// import { createRouter, createWebHistory ,createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:'首頁',
      },
    },
    {
      path:'/yangminshan',
      name: 'yangminshan',
      component: () => import('@/views/YangMinShanView.vue'),
      meta:{
        title:'陽明山 ',
      },
    }
  ],
})

// router.beforeEach(() => {})

// 進到每一頁後執行
// to = 目標路由
// from = 來源路由
router.afterEach((to, from) => {
  document.title = to.meta.title + ' | 國家公園介紹網'
})

export default router


