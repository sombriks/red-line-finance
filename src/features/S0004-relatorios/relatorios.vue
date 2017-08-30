<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-10 col-xs-offset-1">
        <h1 class="r">Relatórios</h1>
        <p>Coisinhas coloridas pra você se animar... ou se preocupar. Olha as contas!</p>
      </div>
    </div>
    <div class="row top-xs"
         v-show="globalstore.temlancamentos">
      <div class="col-xs-10 col-xs-offset-1">
        <red-line :lancamentos="lancamentosordenados"></red-line>
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
      globalstore,
      lancamentosordenados: globalstore.lancamentosordenados()
    };
  },
}
</script>
