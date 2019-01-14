import VueWeekPicker from './vue-week-picker.vue';

VueWeekPicker.install = Vue => Vue.component(VueWeekPicker.name, VueWeekPicker);
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWeekPicker);
}
export default VueWeekPicker;
