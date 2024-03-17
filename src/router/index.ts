import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { AppRoutes } from '@/constants/routes'

import RegisterView from '@/views/RegisterView.vue'
import { TRS_SESSION_KEY } from '@/constants/session'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: AppRoutes.home.path,
      name: AppRoutes.home.name,
      component: DashboardView
    },
    {
      path: AppRoutes.login.path,
      name: AppRoutes.login.name,
      component: LoginView
    },
    {
      path: AppRoutes.register.path,
      name: AppRoutes.register.name,
      component: RegisterView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

router.beforeEach((to, from, next) => {
  const rawSessionData = sessionStorage.getItem(TRS_SESSION_KEY);
  const sessionData = JSON.parse(rawSessionData ?? "")

  switch (to.path) {
    case AppRoutes.home.path:
      if (sessionData && sessionData.isLoggedIn) {
        next();
      } else {
        next({ path: AppRoutes.login.path });
      }
      break;
    case AppRoutes.login.path:
      if (sessionData && sessionData.isLoggedIn) {
        next({ path: AppRoutes.home.path });
      } else {
        next();
      }
      break;
    case AppRoutes.register.path:
      if (sessionData && sessionData.isLoggedIn) {
        next({ path: AppRoutes.register.path });
      } else {
        next();
      }
      break;
    default:
      next();
  }

})

export default router
