<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <h1 class="r">Projeções</h1>
        <p>Como você espera que seja o seu perfil de gastos e ganhos? Como você distribui
          seus lançamentos através das categorias?</p>
      </div>
    </div>
    <div class="row center-xs top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <h2 class="r">Projeção atual</h2>
        <div v-show="!globalstore.usuario.projecao">
          <h3 class="r">Parece que você não tem uma projeção ainda!</h3>
          <p>
            <a href="#/detalheprojecao">Crie uma agora mesmo!</a>
          </p>
        </div>
        <div v-show="globalstore.usuario.projecao">
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Projecao",
  created() {
  },
  data() {
    return {
      globalstore
    };
  }
}
</script>
