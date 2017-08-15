<template>
  <mu-list-item :title="`${lancamento.categoria.nome} (${lancamento.descricao})`"
                :describeText="`${lancamento.dtlancamento} $ ${lancamento.valor}`">
    <mu-icon value="monetization_on"
             slot="left"
             class="r"
             v-if="lancamento.categoria.tipo == 'Saída'"></mu-icon>
    <mu-icon value="monetization_on"
             slot="left"
             class="g"
             v-if="lancamento.categoria.tipo == 'Entrada'"></mu-icon>
    <mu-icon value="indeterminate_check_box"
             slot="right"
             @click="removelancamento(lan)"></mu-icon>
  </mu-list-item>
</template>

<script>
module.exports = {
  name: "ListItemLancamento",
  props: {
    lancamento: {
      type: Object,
      required: true
    }
  },
  methods: {
    removelancamento(lan) {
      this.$emit("removelancamento", lan)
    }
  }
}
</script>

<style>

</style>
