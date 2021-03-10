import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const User = { template: '<div>User {{ $route.params.id }}</div>' }

const routes = [
  {path: '/user/:id', component: User}
]

const router = new Router({
  routes
})
export default router
