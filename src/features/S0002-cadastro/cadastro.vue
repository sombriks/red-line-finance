<template>
  <form @submit.prevent="docadastro" class="row center-xs top-xs">
    <div class="col-xs-8 col-xs-offset-2">
      <h1 class="r">Novo usuário</h1>
      <mu-text-field type="email" label="Email" labelFloat v-model="usuario.email" required/>
      <mu-text-field label="Seu nome" labelFloat v-model="usuario.nome" required/>
      <mu-text-field type="password" label="Senha" labelFloat v-model="usuario.senha" required/>
      <mu-text-field type="password" label="Senha novamente" labelFloat v-model="usuario.senha2"
        required/>
      <br/>
      <br/>
      <mu-raised-button label="Cadastrar" primary type="submit" fullWidth/>
      <br/>
      <br/>
      <mu-flat-button label="Voltar" href="#/login" />
    </div>
  </form>
</template>

<script>
module.exports = {
  name: "Cadastro",
  created() {

  },
  data() {
    return {
      usuario: {}
    };
  },
  methods:{
    docadastro(){
      
    }
  }
}
</script>

<style scoped>
.r {
  color: red;
}
</style>
