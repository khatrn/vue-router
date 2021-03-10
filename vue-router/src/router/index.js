import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Foo = {template: '<div>Foo</div>'}
const Bar = {template: '<div>Bar</div>'}
const User = { template: '<div>User {{ $route.params.id }}</div>' }

const routes = [
  {path: '/foo', component: Foo},
  {path: '/bar', component: Bar},
  {path: '/user/:id', component: User}
]

const route = new Router({
  'mode': 'history',
  routes
})

export default route
