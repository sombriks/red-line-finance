<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <h1 class="r">Lançamentos</h1>
        <p>Papo rápido. Quanto foi, quando foi e, opcionalmente, uma descrição.</p>
      </div>
    </div>
    <div class="row top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <saldo-parcial></saldo-parcial>
      </div>
    </div>
    <form
      @submit.prevent="addlancamento"
      class="row center-xs top-xs"
    >
      <div class="col-xs-8 col-xs-offset-2">
        <mu-date-picker
          hintText="Data lançamento"
          v-model="lancamento.dtlancamento"
          okLabel="OK"
          cancelLabel="Cancelar"
          :dateTimeFormat="dformat"
          autoOk
          fullWidth
        />
  
        <mu-select-field
          label="Categoria"
          v-model="lancamento.categoria"
          fullWidth
        >
          <mu-menu-item
            v-for="cat in globalstore.categorias"
            :key="cat.nome"
            :value="cat"
            :title="'[' + cat.tipo + '] ' + cat.nome"
          />
          </mu-select-field>
  
          <mu-text-field
            label="Valor"
            type="number"
            v-model="lancamento.valor"
            labelFloat
            fullWidth
          />
          <mu-raised-button
            label="Adicionar lançamento"
            icon="monetization_on"
            type="submit"
            primary
            fullWidth
          />
      </div>
      </form>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
const moment = require("moment");
const Vue = require("vue");
module.exports = {
  name: "Lancamento",
  data() {
    return {
      globalstore,
      lancamento: {
        dtlancamento: moment().format("YYYY-MM-DD"),
        categoria: globalstore.categorias[0],
        valor: 100
      },
      dformat: {
        formatDisplay(d) {
          // return d;
          // console.log(d)
          return moment(d).format("DD [de] MMMM")
        },
        formatMonth(d) {
          return moment(d).format("MMMM")
          // return moment(d).toString()
        },
        getWeekDayArray() {
          return ["S", "T", "Q", "Q", "S", "S", "D"];
        }
      },
    };
  },
  methods: {
    addlancamento() {
      if (!this.globalstore.usuario.lancamentos)
        Vue.set(this.globalstore.usuario, "lancamentos", []);
      this.globalstore.usuario.lancamentos.push(JSON.parse(JSON.stringify(this.lancamento)));
      this.globalstore.savecontext();
      alert("Lançamento Salvo!");
      this.lancamento = {
        dtlancamento: moment().format("YYYY-MM-DD"),
        categoria: globalstore.categorias[0],
        valor: 100
      };
    }
  }
}
</script>

<style>

</style>
