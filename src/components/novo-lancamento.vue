<template>
  <form @submit.prevent="addlancamento">
    <mu-date-picker hintText="Data lançamento"
                    v-model="lancamento.dtlancamento"
                    okLabel="OK"
                    cancelLabel="Cancelar"
                    :dateTimeFormat="dformat"
                    autoOk
                    fullWidth />
  
    <mu-select-field label="Categoria"
                     v-model="lancamento.categoria"
                     fullWidth>
      <mu-menu-item v-for="cat in globalstore.categorias"
                    :key="cat.nome"
                    :value="cat"
                    :title="'[' + cat.tipo + '] ' + cat.nome" />
    </mu-select-field>
  
    <mu-text-field label="Valor"
                   type="number"
                   v-model="lancamento.valor"
                   labelFloat
                   fullWidth
                   required />
    <mu-text-field label="Descrição (opcional)"
                   v-model="lancamento.descricao"
                   labelFloat
                   fullWidth />
    <mu-raised-button label="Adicionar lançamento"
                      icon="monetization_on"
                      type="submit"
                      primary
                      fullWidth />
  </form>
</template>
<script>
const globalstore = require("./globalstore");
const moment = require("moment");
const Vue = require("vue");
module.exports = {
  name: "NovoLancamento",
  data() {
    return {
      globalstore,
      lancamento: this.newlancamento(),
      dformat: require("./dformat")(),
    };
  },
  methods: {
    addlancamento() {
      if (!this.globalstore.usuario.lancamentos)
        Vue.set(this.globalstore.usuario, "lancamentos", []);
      this.globalstore.usuario.lancamentos.push(JSON.parse(JSON.stringify(this.lancamento)));
      // this.globalstore.usuario.lancamentos = this.globalstore.usuario.lancamentos.sort((a, b) => {
      // return a.dtlancamento - b.dtlancamento
      // });  
      this.globalstore.savecontext();
      alert("Lançamento Salvo!");
      this.lancamento = this.newlancamento();
    },
    newlancamento() {
      return {
        dtlancamento: moment().format("YYYY-MM-DD"),
        categoria: globalstore.categorias[0],
        descricao: "",
        valor: 100
      };
    }
  }
}
</script>