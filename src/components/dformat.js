
const moment = require("moment");

module.exports = _ => ({
  formatDisplay(d) {
    return moment(d).format("DD [de] MMMM")
  },
  formatMonth(d) {
    return moment(d).format("MMMM")
  },
  getWeekDayArray() {
    return ["S", "T", "Q", "Q", "S", "S", "D"];
  }
});