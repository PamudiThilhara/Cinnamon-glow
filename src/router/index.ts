import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Checkout from '../pages/Checkout.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/checkout', component: Checkout },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})