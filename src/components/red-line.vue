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
        datasets: this.makedatasets()
      }
    })
  },
  beforeDestroy() {
    this.chart.destroy()
  },
  methods: {
    makelabels() {
      // one-line magic to remove duplicates
      return this.lancamentos.map(e => e.dtlancamento).filter((v, i, a) => a.indexOf(v) === i);
    },
    makedatasets() {
      const entradas = {label:"Entradas", data:[]}
      const saidas = {label:"Saídas", data:[]}
      const labels = this.makelabels()
      this.lancamentos.map(e => {
        // if(e.categoria.tipo == "Saída"){

        // }

      })
      const ds = [entradas, saidas];

      return ds;
    }
  }
}
</script>

<style>

</style>
