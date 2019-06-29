import Vue from 'vue'
import Router from 'vue-router'
import One from './views/One.vue'
import Two from './views/Two.vue'
import Three from './views/Three.vue'
import Four from './views/Four.vue'
import Five from './views/Five.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/one',
      name: 'one',
      component: One
    },
    {
      path: '/two',
      name: 'two',
      component: Two
    },
    {
      path: '/three',
      name: 'three',
      component: Three
    },
    {
      path: '/four',
      name: 'four',
      component: Four
    },
    {
      path: '/five',
      name: 'five',
      component: Five
    }
  ]
})
