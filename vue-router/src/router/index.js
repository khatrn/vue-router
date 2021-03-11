import Vue from 'vue'
import Router from 'vue-router'
import UserSetting from '../components/UserSetting'
import UserEmailSubscription from '../components/UserEmailSubscription'
import UserProfile from '../components/UserProfile'
import UserProfilePreview from '../components/UserProfilePreview'

Vue.use(Router)

const routes = [
  {
    path: '/settings',
    component: UserSetting,
    children: [
      {
        path: 'email', component: UserEmailSubscription
      },
      {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }
    ]

  }
]

const route = new Router({
  'mode': 'history',
  routes
})

route.push('/settings/email')

export default route
