import VueRouter from 'vue-router'

import Home from "../views/Home.vue"

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/detail/:id',
          name: 'Detail',
          component: Home,
        }
    ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
  })
  
  export default router