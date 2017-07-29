<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <h1 class="r">Relatórios</h1>
        <p>Coisinhas coloridas pra você se animar... ou se preocupar. Olha as contas!</p>
      </div>
    </div>
    <!-- <div class="row top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <line-chart :chart-data="datacollection"></line-chart>
      </div>
    </div> -->
    <div class="row top-xs"
         v-show="globalstore.usuario && globalstore.usuario && globalstore.usuario.lancamentos && globalstore.usuario.lancamentos.length > 0">
      <div class="col-xs-8 col-xs-offset-2">
        <mu-list>
          <mu-sub-header>Saldo parcial</mu-sub-header>
          <mu-list-item :describeText="'Lançamentos computados'"
                        :title="'$ ' + parcial">
            <mu-icon value="monetization_on"
                     slot="left"
                     class="r"
                     v-if="parcial <= 0"></mu-icon>
            <mu-icon value="monetization_on"
                     slot="left"
                     class="g"
                     v-if="parcial > 0"></mu-icon>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <div class="row top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <mu-list>
          <mu-sub-header>Últimos lançamentos</mu-sub-header>
          <mu-list-item v-show="globalstore.usuario && globalstore.usuario && (!globalstore.usuario.lancamentos || globalstore.usuario.lancamentos.length == 0)"
        
                        title="Parece que você não tem lançamentos ainda!"></mu-list-item>
          <mu-list-item v-for="lan in globalstore.usuario.lancamentos"
                        :title="lan.categoria.nome"
                        :key="lan"
                        :describeText="'$ ' + lan.valor">
            <mu-icon value="monetization_on"
                     slot="left"
                     class="r"
                     v-if="lan.categoria.tipo == 'Saída'"></mu-icon>
            <mu-icon value="monetization_on"
                     slot="left"
                     class="g"
                     v-if="lan.categoria.tipo == 'Entrada'"></mu-icon>
            <mu-icon value="indeterminate_check_box"
                     slot="right"
                     @click="removelancamento(proj)"></mu-icon>
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
  computed: {
    parcial() {
      let p = 0;
      const u = this.globalstore.usuario;
      u.lancamentos.map(e => {
        if (e.categoria.tipo == "Entrada")
          p += parseInt(e.valor);
        else
          p -= parseInt(e.valor);
      });
      return p;
    }
  }
}
</script>

<style>

</style>
