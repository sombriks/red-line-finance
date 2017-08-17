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
      return this.lancamentos.map(e => e.dtlancamento).filter((v, i, a) => a.indexOf(v) === i).reverse();
    },
    makedatasets() {
      const entradas = { label: "Entradas", data: [], backgroundColor: "green", fill: false }
      const saidas = { label: "Saídas", data: [], backgroundColor: "red", fill: false }
      const media = { label: "Saldo", data: [], backgroundColor: "blue", fill: false }
      const labels = this.makelabels()
      const acentrada = {};
      const acsaida = {};
      labels.map(e => acentrada[e] = 0)
      labels.map(e => acsaida[e] = 0)
      this.lancamentos.map(e => {
        if (e.categoria.tipo == "Saída")
          acsaida[e.dtlancamento] += -1 * parseInt(e.valor)
        else
          acentrada[e.dtlancamento] += parseInt(e.valor)
      })
      labels.map(e => {
        entradas.data.push(acentrada[e])
        saidas.data.push(acsaida[e])
      })
      let acmedia = 0;
      entradas.data.map(e => acmedia += e)
      saidas.data.map(e => acmedia += e)
      labels.map(_ => media.data.push(acmedia))
      const ds = [entradas, saidas, media]
      console.log(ds)
      return ds;
    }
  }
}
</script>

<style>

</style>
