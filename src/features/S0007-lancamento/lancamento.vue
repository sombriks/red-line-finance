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
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
const moment = require("moment");
const Vue = require("vue");
module.exports = {
  name: "Lancamento",
}
</script>
