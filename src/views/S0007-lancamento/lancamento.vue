<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-10 col-xs-offset-1">
        <h1 class="r">Lançamentos</h1>
        <p>Papo rápido. Quanto foi, quando foi e, opcionalmente, uma descrição.</p>
      </div>
    </div>
    <div class="row top-xs">
      <div class="col-xs-10 col-xs-offset-1">
        <saldo-parcial></saldo-parcial>
      </div>
      <!-- sobre pensamento orientado a componente... -->
      <div class="col-xs-10 col-xs-offset-1">
        <novo-lancamento></novo-lancamento>
      </div>
    </div>

    <div class="row top-xs">
      <div class="col-xs-10 col-xs-offset-1">
        <mu-list>
          <mu-sub-header>Últimos lançamentos</mu-sub-header>
          <mu-list-item v-show="!globalstore.temlancamentos"
                        title="Parece que você não tem lançamentos ainda!"></mu-list-item>
          <item-lancamento v-for="lan in lancamentosordenados"
                           :key="lan.dtlancamento"
                           :lancamento="lan"
                           @removelancamento="removelancamento(lan)"></item-lancamento>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
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
      lancamentosordenados: globalstore.lancamentosordenados()
    }
  },
  methods: {
    removelancamento(lan) {
      confirm("Deseja realmente remover este lançamento?", yn => {
        if (yn == "yes") {
          const idx = this.globalstore.usuario.lancamentos.indexOf(lan)
          if (idx > -1) {
            this.globalstore.usuario.lancamentos.splice(idx, 1)
            this.globalstore.savecontext()
            this.lancamentosordenados = this.globalstore.lancamentosordenados();
          }
        }
      });
    }
  }

}
</script>
