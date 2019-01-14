import vueWeekPicker from './components/VueWeekPicker.vue'

const VueWeekPicker = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueWeekPicker', vueWeekPicker)
  }
}

export default VueWeekPicker
