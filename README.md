# vue-week-picker

> vue-week-picker
## 安装
 ``` bash
  npm install vue-week-picker --save-dev
 ```
## DEMO
* 原生
[线上DEMO👅 🦊 🐸 🚎 ](https://chengheai.github.io/daily-vue-demo/#/calendar1)
* 与element-ui结合使用
[线上DEMO👅 🦊 🐸 🚎 ](https://chengheai.github.io/daily-vue-demo/#/calendar)
## 功能
* 自适应式按周切换
* 与DatePicker日期选择器使用
## 结合Element-ui使用
## 效果
![](https://github.com/chengheai/review-demo-image/blob/master/2019-01-15%2014-03-05.2019-01-15%2014_03_49.gif?raw=true)
与vue-element结合组件，[请转到🌈](https://github.com/chengheai/daily-vue-demo/blob/master/src/components/Calendar.vue)

![](https://github.com/chengheai/review-demo-image/blob/master/2019-01-15%2014-00-09.2019-01-15%2014_01_04.gif?raw=true)

## 使用
``` javascript
<VueWeekPicker @dateValue="dateValue" />

Or

<vue-week-picker @dateValue="dateValue" />

import VueWeekPicker from 'vue-week-picker';

export default {
  components: {
    VueWeekPicker
  }
}

Or

export default {
  components: {
    'vue-week-picker': VueWeekPicker
  }
}

```
