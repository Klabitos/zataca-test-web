import VueRouter from 'vue-router'

import Home from "../views/Home.vue"
import CardDetail from "../views/CardDetail.vue"

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,   
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: CardDetail,
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: '/zataca-test-web/',
    routes
  })
  
  export default router