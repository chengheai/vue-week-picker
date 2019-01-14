import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 默认主题
import 'element-ui/lib/theme-chalk/display.css'

Vue.prototype._ = _
Vue.use(ElementUI, { size: 'small' })
new Vue({
  el: '#app',
  render: h => h(App)
})
