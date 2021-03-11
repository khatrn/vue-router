import Vue from 'vue'
import Router from 'vue-router'
import UserProfile from '../components/UserProfile'
import UserPost from '../components/UserPost'
import UserHome from '../components/UserHome'
Vue.use(Router)

const Foo = {template: '<div>Foo</div>'}
const Bar = {template: '<div>Bar</div>'}
const User = {
  template: `<div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
        </div>` }

const routes = [
  { path: '/foo', name: 'Foo', component: Foo },
  { path: '/bar', name: 'Bar', component: Bar },
  { path: '/user/:id',
    component: User,
    children: [
      {
        path: '',
        name: 'UserHome',
        component: UserHome
      },
      {
        path: 'profile',
        name: 'UserProfile',
        component: UserProfile
      },
      {
        path: 'post',
        name: 'UserPost',
        component: UserPost
      }]
  }
]

const route = new Router({
  'mode': 'history',
  routes
})

export default route
