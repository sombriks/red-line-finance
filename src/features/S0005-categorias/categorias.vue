<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <h1 class="r">Categorias</h1>
        <p>Dinheiro vai, dinheiro vem. Cabe a você explicar como é esse vai e vem.</p>
      </div>
    </div>
    <div class="row top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <mu-list>
          <mu-sub-header>Categorias para compor projeções</mu-sub-header>
          <mu-list-item v-for="cat in globalstore.categorias"
                        :key="cat.nome"
                        :title="cat.nome">
            <mu-icon value="monetization_on"
                     slot="left"
                     class="r"
                     v-if="cat.tipo == 'Saída'"></mu-icon>
            <mu-icon value="monetization_on"
                     slot="left"
                     class="g"
                     v-if="cat.tipo == 'Entrada'"></mu-icon>
            <mu-icon value="indeterminate_check_box"
                     slot="right"
                     @click="removecategoria(cat)"></mu-icon>
          </mu-list-item>
        </mu-list>
      </div>
    </div>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
module.exports = {
  name: "Categoria",
  data() {
    return {
      globalstore
    };
  },
  methods:{
    removecategoria(cat){
      
    }
  }
};
</script>

<style>

</style>
