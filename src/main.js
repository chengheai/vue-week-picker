import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'

Vue.prototype._ = _
new Vue({
  el: '#app',
  render: h => h(App)
})
