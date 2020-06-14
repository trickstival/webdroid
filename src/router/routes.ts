import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/Viewport.vue'),
    children: [{ path: '', component: () => import('../environments/LockScreen.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('../environments/Error404.vue')
  })
}

export default routes
