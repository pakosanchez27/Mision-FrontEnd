import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import nosotrosView from '../views/nosotrosView'
import menuView from '../views/menuView'
import crearView from '../views/crearView'
import contactoView from '../views/contactoView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    component: nosotrosView
  },
  {
    path:'/menu',
    name: 'menu',
    component: menuView
  },
  {
    path:'/crear',
    name: 'crear',
    component: crearView
  },
  {
    path:'/contacto',
    name: 'contacto',
    component: contactoView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
