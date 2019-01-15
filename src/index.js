import VueWeekPicker from './packages/vue-week-picker.vue';

const components = [
  VueWeekPicker,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueWeekPicker,
}
