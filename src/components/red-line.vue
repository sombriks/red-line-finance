<template>
  <canvas width="100%">
  </canvas>
</template>

<script>
const Chart = require("chart.js")
module.exports = {
  name: "TheRedLine",
  props: {
    lancamentos: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.chart = new Chart(this.$el.getContext("2d"), {
      type: "line",
      data: {
        labels: this.makelabels(),
        datasets: []
      }
    })
  },
  beforeDestroy() {
    this.chart.destroy()
  },
  methods: {
    makelabels() {
      // TODO terminar
      return this.lancamentos.map(e => e.dtlancamento).filter((v, i, a) => a.indexOf(v) === i);
    }
  }
}
</script>

<style>

</style>
