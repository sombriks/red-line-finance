<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-10 col-xs-offset-1">
        <h1 class="r">Relatórios</h1>
        <p>Coisinhas coloridas pra você se animar... ou se preocupar. Olha as contas!</p>
      </div>
    </div>
    <div class="row top-xs"
         v-show="temlancamentos">
      <!-- <div class="col-xs-10 col-xs-offset-1">
        <saldo-parcial></saldo-parcial>
      </div> -->
      <div class="col-xs-10 col-xs-offset-1">
        <red-line :lancamentos="lancamentosordenados"></red-line>
      </div>
    </div>
    <div class="row top-xs">
      <div class="col-xs-10 col-xs-offset-1">
        <mu-list>
          <mu-sub-header>Últimos lançamentos</mu-sub-header>
          <mu-list-item v-show="!temlancamentos"
                        title="Parece que você não tem lançamentos ainda!"></mu-list-item>
          <item-lancamento v-for="lan in lancamentosordenados"
                           :lancamento="lan"
                           :key="lan.dtlancamento"
                           @removelancamento="removelancamento(lan)"></item-lancamento>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Relatorio",
  data() {
    return {
      globalstore
    };
  },
  methods: {
    removelancamento(lan) {
      confirm("Deseja realmente remover este lançamento?", yn => {
        if (yn == "yes") {
          const idx = this.globalstore.usuario.lancamentos.indexOf(lan)
          if (idx > -1) {
            this.globalstore.usuario.lancamentos.splice(idx, 1)
            this.globalstore.savecontext()
          }
        }
      });
    }
  },
  computed: {
    temlancamentos() {
      return globalstore.usuario && globalstore.usuario.lancamentos && globalstore.usuario.lancamentos.length > 0
    },
    lancamentosordenados() {
      let grupolancamentos = [];
      if (globalstore.usuario && globalstore.usuario.lancamentos) {
        grupolancamentos = globalstore.usuario.lancamentos.sort((a, b) => {
          return b.dtlancamento.localeCompare(a.dtlancamento)
        });
      }
      return grupolancamentos
    }
  }
}
</script>
