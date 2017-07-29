<template>
  <div>
    <div class="row center-xs top-xs">
      <div class="col-xs-8 col-xs-offset-2">
        <h1 class="r">Projeções</h1>
        <p>Como você espera que seja o seu perfil de gastos e ganhos? Como você distribui
          seus lançamentos através das categorias?</p>
        <p>Projeções são pensadas para lhe ajudar a pensar no período de um mês. Elas
          que vão dizer se o mês é apertado ou não.</p>
      </div>
    </div>
    <div class="row top-xs">
      <form @submit.prevent="addcategoria"
            class="col-xs-8 col-xs-offset-2">
        <mu-list>
          <mu-sub-header>Projeção atual</mu-sub-header>
          <mu-list-item v-show="globalstore.usuario && globalstore.usuario && (!globalstore.usuario.projecao || globalstore.usuario.projecao.length == 0)"
        
                        title="Parece que você não tem uma projeção ainda!"></mu-list-item>
          <mu-list-item v-show="globalstore.usuario && globalstore.usuario.projecao"
                        v-for="proj in globalstore.usuario.projecao"
                        :title="proj.categoria.nome"
                        :key="proj.nome"
                        :describeText="'$ ' + proj.montante">
            <mu-icon value="monetization_on"
                     slot="left"
                     class="r"
                     v-if="proj.categoria.tipo == 'Saída'" />
            <mu-icon value="monetization_on"
                     slot="left"
                     class="g"
                     v-if="proj.categoria.tipo == 'Entrada'" />
            <mu-icon value="indeterminate_check_box"
                     slot="right"
                     @click="removecategoria(proj)" />
          </mu-list-item>
        </mu-list>
        <div>
          <mu-select-field label="Categoria"
                           v-model="catsel"
                           fullWidth>
            <mu-menu-item v-for="cat in globalstore.categorias"
                          :key="cat.nome"
                          :value="cat"
                          :title="'[' + cat.tipo + '] ' + cat.nome" />
          </mu-select-field>
          <mu-text-field label="Montante"
                         type="number"
                         v-model="montante"
                         labelFloat
                         fullWidth/>
          <mu-raised-button label="Adicionar categoria"
                            icon="add_box"
                            type="submit"
                            primary
                            fullWidth /> 
          <br/>
          <br/>
          <br/>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
const globalstore = require("../../components/globalstore");
const Vue = require("vue");
module.exports = {
  name: "Projecao",
  created() {

  },
  data() {
    return {
      globalstore,
      catsel: null,
      montante: 1000,
    };
  },
  methods: {
    addcategoria() {
      // TODO ao adicionar a primeira vez a tela não detecta o array novo.
      if (!this.globalstore.usuario.projecao)
        Vue.set(this.globalstore.usuario, "projecao", []);
      this.globalstore.usuario.projecao.push({
        categoria: this.catsel,
        montante: this.montante
      });
      this.globalstore.savecontext();
    },
    removecategoria(c) {
      this.globalstore.usuario.projecao = this.globalstore.usuario.projecao.filter(e => e != c);
      this.globalstore.savecontext();
    }
  }
}
</script>
