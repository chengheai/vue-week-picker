import Vue from 'vue'
import Router from 'vue-router'
import VueWeekPicker from '@/components/VueWeekPicker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueWeekPicker',
      component: VueWeekPicker
    }
  ]
})
