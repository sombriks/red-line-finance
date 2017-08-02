<template>
  <mu-list>
    <mu-sub-header>Saldo parcial</mu-sub-header>
    <mu-list-item
      :describeText="'Lançamentos computados'"
      :title="'$ ' + parcial"
    >
      <mu-icon
        value="monetization_on"
        slot="left"
        class="r"
        v-if="parcial <= 0"
      ></mu-icon>
        <mu-icon
          value="monetization_on"
          slot="left"
          class="g"
          v-if="parcial > 0"
        ></mu-icon>
          </mu-list-item>
  </mu-list>
</template>
<script>
const globalstore = require("./globalstore");
module.exports = {
  name:"SaldoParcial",
  data(){
    return {
      globalstore
    }
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
  },
}
</script>