<template>
  <div class="date">
    <div class="weeks">
      <ul class="days">
        <li @click="weekPre" class="prev-btn">
          <i class="arr-left"></i>
          <span class="hidden-sm-and-down" style="margin-left: 5px;">上一周</span>
        </li>
        <li
          class="date-item"
          @click="pick(day, index)"
          v-for="(day, index) in days"
          :key="index"
          :class="{selected: index == tabIndex}"
        >
          <span v-if="day.getMonth()+1 != currentMonth" class="other-month item-wrapper">
            <p>{{day | getWeekFormat}}</p>
            <span class="hidden-sm-and-down">{{ day | dateFormat }}</span>
          </span>
          <span v-else>
            <span
              v-if="day.getFullYear() == new Date().getFullYear() && day.getMonth() == new Date().getMonth() && day.getDate() == new Date().getDate()"
              class="today-item"
            >今天</span>
            <span class="item-wrapper" v-else>
              <p>{{day | getWeekFormat}}</p>
              <span class="hidden-sm-and-down">{{ day | dateFormat }}</span>
            </span>
          </span>
        </li>
        <li @click="weekNext" class="next-btn">
          <span class="hidden-sm-and-down" style="margin-right: 5px;">下一周</span>
          <i class="arr-right"></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
export default {
  props: {
    dateValue: {
      type: String,
      default: moment(new Date()).format("YYYY-MM-DD")
    },
    timeValue: {
      type: String,
      default: "00:00"
    }
  },
  data() {
    return {
      currentYear: 1970,
      currentMonth: 1,
      currentDay: 1,
      currentWeek: 1,
      days: [],
      tabIndex: null,
      newDate: moment(new Date()).format("YYYY-MM-DD")
    };
  },
  filters: {
    dateFormat(date) {
      return moment(date).format("YYYY-MM-DD");
    },
    getWeekFormat(date) {
      const weeksObj = {
        1: "周一",
        2: "周二",
        3: "周三",
        4: "周四",
        5: "周五",
        6: "周六",
        7: "周日"
      };
      let weekNumber = moment(date).isoWeekday();
      return weeksObj[weekNumber];
    }
  },

  mounted() {
    // const index = _.findIndex(this.days, function(o) {
    //   return moment(o).dayOfYear() === moment().dayOfYear();
    // });
    // this.tabIndex = index;
    this.initcurrentIndex();
  },

  created() {
    this.initData(null);
  },

  methods: {
    initcurrentIndex(refresh) {
      this.newDate = refresh || this.newDate;
      let newDate = this.newDate;
      let index = _.findIndex(this.days, function(o) {
        return (
          moment(o).format("YYYY-MM-DD") ===
          moment(newDate).format("YYYY-MM-DD")
        );
      });
      this.tabIndex = index;
    },
    formatDate(year, month, day) {
      const y = year;
      let m = month;
      if (m < 10) m = `0${m}`;
      let d = day;
      if (d < 10) d = `0${d}`;
      return `${y}-${m}-${d}`;
    },
    initData(cur) {
      let date = "";
      if (cur) {
        date = new Date(cur);
      } else {
        date = new Date();
      }
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
      this.currentWeek = date.getDay();
      if (this.currentWeek === 0) {
        this.currentWeek = 7;
      }
      const str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );
      this.days.length = 0;
      for (let i = this.currentWeek - 1; i >= 0; i -= 1) {
        const d = new Date(str);
        d.setDate(d.getDate() - i);
        this.days.push(d);
      }
      for (let i = 1; i <= 7 - this.currentWeek; i += 1) {
        const d = new Date(str);
        d.setDate(d.getDate() + i);
        this.days.push(d);
      }
    },
    weekPre() {
      const d = this.days[0];
      d.setDate(d.getDate() - 7);
      this.initData(d);
      this.initcurrentIndex();
    },
    weekNext() {
      const d = this.days[6];
      d.setDate(d.getDate() + 7);
      this.initData(d);
      this.initcurrentIndex();
    },
    pick(date, index) {
      this.newDate = moment(date).format("YYYY-MM-DD");
      this.$emit("dateValue", this.newDate);
      console.log("this.newDate: ", this.newDate);
      console.log("index: ", index);
      // this.tabIndex = index;
      this.initcurrentIndex();
    }
  }
};
</script>

<style lang='css' scoped>
@media screen and (max-width: 1300px) {
  .days li {
    padding: 5px 0 !important;
  }
}
.weeks {
  width: 100%;
}
.today-item {
  cursor: pointer;
  line-height: 45px;
}
.selected {
  height: 57px !important;
  box-sizing: border-box;
  color: #fff !important;
  background: #409eff !important;
}
.item-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.prev-btn,
.next-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.prev-btn .fa-icon,
.next-btn .fa-icon {
  font-size: 18px;
}
.date {
  font-size: 14px;
  margin-top: 15px;
}
.date .time-range {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}
.date .time-range span {
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 3px solid #fff;
}
.date .time-range span:hover {
  border-bottom: 3px solid #97c6f5;
}
.date .time-range span:active {
  border-bottom: 3px solid #97c6f5;
}
.date .time-range .active {
  border-bottom: 3px solid #409eff;
}
.date .days {
  display: flex;
  height: 57px;
}
.date .days .arr-right {
  width: 7px;
  height: 7px;
  border-top: 2px solid #6e6a6a;
  border-right: 2px solid #6e6a6a;
  transform: rotate(45deg);
}
.date .days .arr-left {
  width: 7px;
  height: 7px;
  border-top: 2px solid #6e6a6a;
  border-left: 2px solid #6e6a6a;
  transform: rotate(-45deg);
}
.date .days li {
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-right: none;
  list-style: none;
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.date .days .date-item:hover {
  background: #dff0d8;
}
.date .days .date-item:active {
  background: #dff0d8;
}
.date .days li:nth-last-child(1) {
  border-right: 1px solid #ccc;
}
</style>
